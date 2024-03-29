import type { ChainConfig, TransactionParameter, WalletImpl } from '@/entities/wallet'
import { CHAIN_CONFIG_MAP } from '../constants'

class MetamaskWallet implements WalletImpl {
  get provider () {
    if (window.ethereum == null) throw new Error('Please install Metamask plugin')
    return window.ethereum
  }

  async connect () {
    const accounts = await this.provider.request({ method: 'eth_requestAccounts' })
    return accounts[0] as string
  }

  async disconnect () {
    await this.provider.request({
      method: 'wallet_revokePermissions',
      params: [
        {
          eth_accounts: {}
        }
      ]
    })
  }

  async switchToChain (chain: string) {
    const config = CHAIN_CONFIG_MAP[chain]
    if (config == null) {
      throw new Error('The network is not configured')
    }

    try {
      await this.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: config.chainId
          }
        ]
      })
    } catch {
      await this.addToChain(config)
    }
  }

  async addToChain (config: ChainConfig) {
    await this.provider.request({
      method: 'wallet_addEthereumChain',
      params: [config]
    })
  }

  async signTransaction (parameter: TransactionParameter) {
    return await this.provider.request({
      method: 'eth_sendTransaction',
      params: [parameter]
    })
  }

  removeAllListeners () {
    void this.provider.removeAllListeners()
  }
}

export default new MetamaskWallet()
