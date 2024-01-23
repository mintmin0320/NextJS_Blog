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
const MAX_DISPLAY = 8

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mt-10 text-2xl leading-7 text-gray-800 dark:text-white">
        <p>안녕하세요 👋 프론트엔드 개발자 박하민입니다.</p>
        <p className="mt-3">이 블로그는 배우고 느낀 점을 기록하는 공간입니다!</p>
      </div>
      <div className="w-full pt-16">
        <div className="flex space-y-2  justify-between items-center mb-4">
          <p className="text-3xl leading-7 text-gray-700   dark:text-gray-200 flex justify-center">
            {siteMetadata.description}
          </p>
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
        <ul className="divide-y divide-gray-200 dark:divide-gray-500 sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:gap-8">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, title, tags, images, date } = post
            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="rounded-[16px] transition-transform duration-300 hover:scale-105 shadow-[5px_5px_20px_3px_rgba(0,0,0,0.2)]"
              >
                <li className="bg-[#e9e9e9] rounded-[16px] dark:bg-[#424242] h-full mb-10">
                  <div className="h-[200px] rounded-t-[16px]">
                    <Image
                      src={images?.[0] ?? '/path/to/default/image.jpg'}
                      alt="avatar"
                      width={192}
                      height={192}
                      className="h-[200px] w-screen rounded-t-[16px]"
                    />
                  </div>
                  <article>
                    <time
                      className="font-[400] pt-2 text-[13px] flex justify-center"
                      dateTime={date}
                    >
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                    <div className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0 px-3 pt-2 pb-1">
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="font-bold leading-8 tracking-tight w-full ">{title}</h2>

                            {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      <ScrollTopAndComment />
    </div>
  )
}
