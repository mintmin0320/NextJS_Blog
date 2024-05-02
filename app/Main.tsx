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
const MAX_DISPLAY = 12

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
                className="text-primary-500 hover:text-black dark:hover:text-white pr-3"
                aria-label="All posts"
              >
                전체 보기
              </Link>
            </div>
          )}
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-500 place-content-center grid grid-cols-[repeat(auto-fill,280px)] gap-y-[142px] gap-x-[22px] mo:grid-cols-1">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post, index) => {
            // const randomBoolean = Math.random() >= 0.6
            // const isFirstOrLast = index % 4 === 0 || index % 4 === 3
            const isEven = index % 2 === 0
            const { slug, title, tags, images, date } = post

            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className={`rounded-[16px] w-[280px] transition-transform duration-300 hover:scale-105 mo:w-full ${
                  isEven ? 'h-[258px]' : 'h-[215px]'
                }`}
              >
                <li className="rounded-[16px] dark:bg-[#424242] h-full w-full mb-10">
                  <Image
                    src={images?.[0] ?? '/path/to/default/image.jpg'}
                    alt="thumbnail"
                    width={280}
                    height={isEven ? 258 : 215}
                    className={`rounded-[16px] border mo:w-full
                    ${isEven ? 'h-[258px]' : 'h-[215px]'}`}
                  />

                  <article>
                    <time
                      className="font-[400] pt-2 text-[13px] flex justify-center"
                      dateTime={date}
                    >
                      <p className="border border-x-0 border-t-0 border-b-[#000] dark:border-0 dark:border-b dark:border-b-[#fff] ">
                        {formatDate(date, siteMetadata.locale)}
                      </p>
                    </time>
                    <div className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0 px-3 pt-2 pb-1">
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="font-bold leading-8 tracking-tight w-full hover:text-primary-500">
                              {title}
                            </h2>

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
