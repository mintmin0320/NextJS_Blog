import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'

import 'css/tailwind.css'
import Skill from '@/components/Skill'

// 메인 페이지 표시할 post 갯수 지정
const MAX_DISPLAY = 4

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mt-10 text-2xl leading-7 text-gray-800 dark:text-white">
        <p>안녕하세요 👋 프론트엔드 개발자 지망생 박하민입니다.</p>
        <p className="mt-3">이 블로그는 배우고 느낀 점을 기록하는 공간입니다!</p>
      </div>
      <div className="w-full pt-10">
        <div className="space-y-2 pt-6 md:space-y-5">
          <p className="text-3xl leading-7 text-gray-600 pb-3 border-b border-gray-300 dark:text-gray-200">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-500 ">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, title, tags } = post
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0">
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight w-full ">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 hover:text-primary-500 dark:text-gray-100 hover:dark:text-primary-500"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-center text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-black dark:hover:text-white"
              aria-label="All posts"
            >
              전체보기
            </Link>
          </div>
        )}
      </div>
      <ScrollTopAndComment />
    </div>
  )
}
