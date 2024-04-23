import { createFunctionCall } from '@/components/function-call'
import ConfettiDialog from '../components/ConfettiDialog.vue'

export const useCreatePointConfetti = () => {
  const create = (point: string) => {
    createFunctionCall(ConfettiDialog, {
      title: 'EXCENLLENT',
      description: `GET ${point} POINTS`,
      open: true
    })
  }

  return create
}
