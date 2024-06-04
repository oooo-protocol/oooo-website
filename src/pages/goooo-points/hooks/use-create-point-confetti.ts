import { createFuncall } from 'vue-funcall'
import ConfettiDialog from '../components/ConfettiDialog.vue'

export const useCreatePointConfetti = () => {
  const create = (message: string) => {
    createFuncall(ConfettiDialog, {
      title: 'EXCENLLENT',
      description: message,
      open: true
    })
  }

  return create
}
