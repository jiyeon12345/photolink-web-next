import { modalAtom } from '@/states/utils/modalAtom'
import { useSetAtom } from 'jotai'
import { RESET } from 'jotai/utils'

export function useModal() {
  const setModal = useSetAtom(modalAtom)

  function addModal(modal: Modal) {
    setModal(modal)
  }

  function removeModal() {
    setModal(RESET)
  }

  function updateModal(modal: Modal) {
    setModal(modal)
  }

  return {
    addModal,
    removeModal,
    updateModal,
  }
}
