import { uuid } from 'oooo-components/lib/utils'
import { storage } from '@preflower/utils'
import { useEVMWallet } from 'oooo-components/oooo-wallet'

const SIGNATURE_STORAGE_KEY = '__oooo-signature'

interface SignatureStorage {
  walletAddress: string
  signature: string
  signContent: string
}

export const useSignatureProvider = () => {
  const { address, getWalletInstance, onLogout } = useEVMWallet()

  const signatureStorage = ref(storage.local.get<SignatureStorage>(SIGNATURE_STORAGE_KEY))
  const signature = computed(() => signatureStorage.value?.signature)
  const signContent = computed(() => signatureStorage.value?.signContent ?? '')

  const generateSignContent = () => {
    return `oooo Authentication
Welcome to oooo!
The signature is only used to verify your wallet address and does not involve any asset transfers.
Timestamp: ${+new Date()}
Thank you for using oooo for a secure and decentralized experience.
oooo Team
Nonce: ${uuid()}`
  }

  const onSign = async () => {
    if (address.value == null) return

    try {
      const instance = getWalletInstance()

      const _signContent = generateSignContent()
      const _signature = await instance.sign(_signContent, address.value)
      signatureStorage.value = {
        walletAddress: address.value,
        signature: _signature,
        signContent: _signContent
      }
      storage.local.set(SIGNATURE_STORAGE_KEY, signatureStorage.value)
    } catch (e) {
      void onLogout()
    }
  }

  const onSignout = () => {
    signatureStorage.value = null
    storage.local.remove(SIGNATURE_STORAGE_KEY)
  }

  watch(address, async (address) => {
    if (address == null) {
      onSignout()
      return
    }
    if (signatureStorage.value == null) {
      await onSign()
      return
    }
    if (address !== signatureStorage.value.walletAddress) {
      onSignout()
      await onSign()
    }
  }, {
    immediate: true
  })

  provide('signature-provider', { signature, signContent })

  return { signature, signContent }
}

export const useSignature = () => {
  const value = inject<{
    signature: Ref<string | null>
    signContent: Ref<string>
  }>('signature-provider')

  if (!value) throw new Error('Signature provider not available')
  return value
}
