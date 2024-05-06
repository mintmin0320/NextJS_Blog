'use client'

import { useRouter } from 'next/navigation'

const HomeRedirectButton = () => {
  const router = useRouter()

  return (
    <button
      type="button"
      className="font-[700] text-[20px] bg-black text-white p-[12px] rounded-[16px] mt-[32px] dark:bg-[#f2f2f2] dark:text-black"
      onClick={() => router.push('/')}
    >
      메인으로 이동하기
    </button>
  )
}

export default HomeRedirectButton
