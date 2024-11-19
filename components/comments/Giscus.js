import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

const Giscus = () => {
  const ref = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    // 기존 script 제거
    const existingScript = ref.current?.querySelector('.giscus-frame')
    if (existingScript) existingScript.remove()

    // Giscus script 자동 로드
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', siteMetadata.comment.giscusConfig.repo)
    script.setAttribute('data-repo-id', siteMetadata.comment.giscusConfig.repositoryId)
    script.setAttribute('data-category', siteMetadata.comment.giscusConfig.category)
    script.setAttribute('data-category-id', siteMetadata.comment.giscusConfig.categoryId)
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    script.setAttribute('data-lang', 'ko')
    script.crossOrigin = 'anonymous'
    script.async = true

    ref.current?.appendChild(script)
  }, [theme])

  return (
    <div ref={ref} className="w-full pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"></div>
  )
}

export default Giscus
