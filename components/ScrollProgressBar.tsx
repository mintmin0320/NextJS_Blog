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
      return 'bg-blue-400'
    }

    if (progress <= 75) {
      return 'bg-blue-500'
    }

    if (progress > 75) {
      return 'bg-blue-700'
    }
  }

  return (
    <div
      className={`h-0.5 transition-all duration-300 ease-out ${setProgressColor(progress)}`}
      style={{ width: `${progress}%` }}
    />
  )
}

export default ScrollProgressBar
