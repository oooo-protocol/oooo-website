import { useWallet } from '@/composables/hooks/use-wallet'
import { uuid } from 'oooo-components/lib/utils'

export const useSignatureProvider = () => {
  const { wallet, sign, onLogout } = useWallet()
  const signature = ref<string>()
  const signContent = computed(() => {
    // just for update signContent when wallet change
    let text = wallet.value?.address

    text = `oooo Authentication
Welcome to oooo!
The signature is only used to verify your wallet address and does not involve any asset transfers.
Timestamp: ${+new Date()}
Thank you for using oooo for a secure and decentralized experience.
oooo Team
Nonce: ${uuid()}`

    return text
  })

  const onSign = async () => {
    if (!wallet.value) return

    try {
      signature.value = await sign(signContent.value, wallet.value.address)
    } catch {
      void onLogout()
    }
  }

  onBeforeMount(async () => {
    await onSign()
  })

  watch(wallet, async (wallet) => {
    if (!wallet) {
      signature.value = undefined
    } else {
      await onSign()
    }
  })

  provide('signature-provider', { signature, signContent })

  return { signature, signContent }
}

export const useSignature = () => {
  const value = inject<{
    signature: Ref<string | undefined>
    signContent: Ref<string>
  }>('signature-provider')

  if (!value) throw new Error('Signature provider not available')
  return value
}
