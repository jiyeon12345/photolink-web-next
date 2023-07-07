'use client'

import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

/**
 * ModalPortal 컴포넌트.
 *
 * 이 컴포넌트는 React의 createPortal 함수를 래핑한 것
 * 주어진 children을 지정한 DOM 노드('root')에 렌더링하는 역할
 * 모달, 툴팁, 팝오버 등 부모의 DOM 계층 외부의 DOM 노드에 자식을 렌더링해야 할 때 사용
 *
 * @prop {ReactNode} children - 'modal' DOM 노드에 렌더링될 React 컴포넌트
 */

type ModalPortalProps = {
  children: ReactNode
}

const Portal = ({ children }: ModalPortalProps) => {
  if (
    !children ||
    typeof window === 'undefined' ||
    typeof document === 'undefined'
  ) {
    return null
  }

  return createPortal(children, document.getElementById('root')!)
}

export default Portal
