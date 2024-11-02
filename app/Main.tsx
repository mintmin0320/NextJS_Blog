import ScrollTopAndComment from '@/components/ScrollTopAndComment'

import Posts from '@/components/Posts'
import 'css/tailwind.css'

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-9/12 mt-10 text-2xl leading-7 text-gray-800 dark:text-white">
        <p>안녕하세요 👋 프론트엔드 개발자 박하민입니다.</p>
        <p className="mt-3">이 블로그는 배우고 느낀 점을 기록하는 공간입니다!</p>
      </div>
      <Posts posts={posts} />
      <ScrollTopAndComment />
    </div>
  )
}
