'use client'

import { T_Member } from '@/types/model/member'
import { atom, useAtom } from 'jotai'

const initialState: T_Member = {
  email: '',
  password: '',
}

const memberAtom = atom<T_Member>(initialState)

export const useMemberAtom = () => {
  const [member, setMember] = useAtom(memberAtom)
  return { member, setMember }
}
