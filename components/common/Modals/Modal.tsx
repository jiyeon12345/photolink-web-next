'use client'

import { useModal } from '@/hooks/useModal'
import { modalAtom } from '@/states/utils/modalAtom'
import { useAtomValue } from 'jotai'
import ModalPortal from './ModalPortal'
import { MouseEvent, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import { StyledModalOverlay, StyledModalWrapper } from './styled'
import {
  EXIT_MOTION,
  modalDesktopVariants,
  modalMobileVariants,
  modalOverlayVariants,
  modalTransition,
} from '@/styles/theme/motion'
import { useResponsive } from '@/hooks'
import ModalView from './View/ModalView'

function Modals() {
  const { removeModal } = useModal()
  const { isMobileOrTablet } = useResponsive()
  const modal = useAtomValue(modalAtom)

  function closeModal(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    removeModal()
  }

  const motionVariants = useMemo(
    () => (isMobileOrTablet ? modalMobileVariants : modalDesktopVariants),
    [isMobileOrTablet]
  )

  return (
    <ModalPortal>
      <AnimatePresence>
        {modal && (
          <StyledModalOverlay
            {...EXIT_MOTION}
            variants={modalOverlayVariants}
            transition={modalTransition}
            onClick={closeModal}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modal && (
          <StyledModalWrapper
            {...EXIT_MOTION}
            variants={motionVariants}
            transition={modalTransition}
          >
            <ModalView modal={modal} />
          </StyledModalWrapper>
        )}
      </AnimatePresence>
    </ModalPortal>
  )
}

export default Modals
