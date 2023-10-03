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
const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between pt-6 justify-between">
        <div className="w-2/6 py-6 flex-col items-center hidden md:flex  border border-gray-300 rounded-md">
          <Image
            src="/static/images/mintmin.jpg"
            alt=""
            width={150}
            height={150}
            className="h-60 w-60 object-cover rounded-full"
            priority
          />
          <p className="w-8/12 flex justify-center pt-2 font-bold text-2xl ">프론트엔드</p>
          <Skill />
          <div className="w-8/12 flex justify-center pt-11">
            <a href="https://hits.seeyoufarm.com">
              <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fmintmin-dev-world.vercel.app&count_bg=%23F43F5E&title_bg=%23555555&icon=&icon_color=%23F43F5E&title=hits&edge_flat=false" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-3/6">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <p className="text-2xl leading-7 text-gray-600 dark:text-gray-200">
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
      </div>
      <ScrollTopAndComment />
    </div>
  )
}
