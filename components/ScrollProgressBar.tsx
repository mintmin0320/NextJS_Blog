'use client'

import { useEffect, useState } from 'react'

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState<number>(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100

    setProgress(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const setProgressColor = (progress: number) => {
    if (progress <= 40) {
      return 'bg-violet-300'
    }

    if (progress <= 75) {
      return 'bg-violet-400'
    }

    if (progress > 75) {
      return 'bg-violet-500'
    }
  }

  return (
    <div
      className={`h-1 fixed top-0 transition-all duration-300 ease-out ${setProgressColor(
        progress
      )}`}
      style={{ width: `${progress}%` }}
    />
  )
}

export default ScrollProgressBar
