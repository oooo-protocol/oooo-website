import { WALLET_TYPE, type WalletOptions, type EthereumWalletImpl } from '@/entities/wallet'
import { ENV_VARIABLE } from '../../../../lib/constants'
import { toUtf8Bytes, hexlify } from 'ethers'
import { NoAlarmException } from '@/lib/exception'

export class EthereumWallet implements EthereumWalletImpl {
  readonly type = WALLET_TYPE.ETHEREUM

  getProvider: any

  constructor ({ getProvider, disconnect }: WalletOptions) {
    this.getProvider =
      getProvider ??
      (() => {
        if (window.ethereum == null) throw new NoAlarmException('Please install Wallet plugin')
        return window.ethereum
      })
    if (disconnect) {
      this.disconnect = disconnect
    }
  }

  async getAccounts () {
    const provider = await this.getProvider()
    return provider.request({ method: 'eth_accounts' }) as string[]
  }

  async connect () {
    const provider = await this.getProvider()
    const accounts = await provider.request({ method: 'eth_requestAccounts' })
    return accounts[0] as string
  }

  async disconnect () {
    const provider = await this.getProvider()
    try {
      /**
       * only metamask support wallet_revokePermissions method
       */
      await provider.request({
        method: 'wallet_revokePermissions',
        params: [
          {
            eth_accounts: {}
          }
        ]
      })
    } catch (e) {}
  }

  async sign (message: string, from: string) {
    const provider = await this.getProvider()
    const parameter = {
      method: 'personal_sign',
      params: [
        hexlify(toUtf8Bytes(message)),
        from
      ]
    }
    if (ENV_VARIABLE.VITE_MODE === 'dev') {
      console.log('personal_sign', parameter)
    }
    const signature = await provider.request(parameter)
    return signature
  }

  async removeAllListeners () {
    const provider = await this.getProvider()
    void provider.removeAllListeners()
  }
}
