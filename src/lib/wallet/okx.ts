import type { WalletImpl, ChainConfig, TransactionParameter } from '@/entities/wallet'
import { CHAIN_CONFIG_MAP } from '../constants'

class OKXWallet implements WalletImpl {
  get provider () {
    if (window.okxwallet == null) throw new Error('Please install OKX plugin')
    return window.okxwallet
  }

  async connect () {
    const accounts = await this.provider.request({ method: 'eth_requestAccounts', params: [] })
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

  async removeAllListeners () {
    void this.provider.removeAllListeners()
  }
}

export default new OKXWallet()
