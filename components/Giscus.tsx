'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

import 'css/prism.css'

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const repo = process.env.NEXT_PUBLIC_GISCUS_REPO
    const repoId = process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID
    const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

    // 환경 변수 값이 없으면 early return
    if (!repo || !repoId || !categoryId) {
      return
    }

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    scriptElem.setAttribute('data-repo', repo)
    scriptElem.setAttribute('data-repo-id', repoId)
    scriptElem.setAttribute('data-category', 'General')
    scriptElem.setAttribute('data-category-id', categoryId)
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'bottom')
    scriptElem.setAttribute('data-theme', theme)
    scriptElem.setAttribute('data-lang', 'ko')

    ref.current.appendChild(scriptElem)
  }, [])

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app')
  }, [theme])

  return <section ref={ref} />
}
