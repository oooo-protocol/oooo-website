import type { TransactionParameter, WalletImpl } from '@/entities/wallet'
import { WALLET } from '@/lib/constants'
import metamaskWallet from '@/lib/wallet/metamask'
import okxWallet from '@/lib/wallet/okx'
import { storage } from '@preflower/utils'

interface WalletStorage {
  address: string
  name: WALLET
}

const wallet = ref<WalletStorage | undefined>()
const instances = {
  [WALLET.METAMASK]: metamaskWallet,
  [WALLET.OKX]: okxWallet
}

let instance: WalletImpl | undefined

(function init () {
  const storageWallet = storage.local.get<WalletStorage>('oooomain-wallet')
  if (storageWallet != null) {
    wallet.value = storageWallet
    instance = instances[storageWallet.name]
  }
})()

const getInstance = (name?: WALLET) => {
  if (name != null) instance = instances[name]
  if (instance == null) {
    throw new Error(`Invalid wallet wallet-id: ${name as any}`)
  }
  return instance
}

const updateWallet = (value?: WalletStorage) => {
  wallet.value = value
  if (value) {
    storage.local.set('oooomain-wallet', value)
  } else {
    storage.local.remove('oooomain-wallet')
  }
}

export const useWallet = () => {
  const onConnect = async (name: WALLET) => {
    const instance = getInstance(name)
    const address = await instance.connect()
    await instance.provider.on('accountsChanged', handleAddressChanged)
    updateWallet({
      address,
      name
    })
  }

  const switchToChain = async (chain: string) => {
    const instance = getInstance()
    await instance.switchToChain(chain)
  }

  const signTransaction = async (parameter: TransactionParameter) => {
    const instance = getInstance()
    return await instance.signTransaction(parameter)
  }

  const onLogout = async () => {
    updateWallet(undefined)
    if (instance) {
      instance.disconnect()
      void instance.provider.removeAllListeners()
      instance = undefined
    }
  }

  const handleAddressChanged = (accounts: string[]) => {
    const account = accounts[0]
    if (account) {
      updateWallet({
        address: accounts[0],
        name: wallet.value!.name
      })
    } else {
      updateWallet(undefined)
    }
  }

  return {
    wallet,
    onConnect,
    switchToChain,
    signTransaction,
    onLogout,
    updateWallet
  }
}
