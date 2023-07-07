'use client'

import { ModalType } from '@/config/constants'
import { assertUnreachable } from '@/utils/assertUnreachable'
import dynamic from 'next/dynamic'

const TestModal = dynamic(() => import('./TestModal/TestModal'), {
  suspense: true,
})

type ModalViewProps = {
  modal: Modal
}

export default function ModalView({ modal }: ModalViewProps) {
  return renderModal(modal)
}

function renderModal(modal: Modal) {
  const { type, props } = modal

  switch (type) {
    case ModalType.Test:
      return <TestModal />
    case ModalType.Test2:
      return <div>test2</div>
    default:
      assertUnreachable(modal.type)
  }
}
