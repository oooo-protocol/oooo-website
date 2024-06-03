import { createFuncall } from 'vue-funcall'
import ConfettiDialog from '../components/ConfettiDialog.vue'

export const useCreatePointConfetti = () => {
  const create = (point: string) => {
    createFuncall(ConfettiDialog, {
      title: 'EXCENLLENT',
      description: `GET ${point} POINTS`,
      open: true
    })
  }

  return create
}
