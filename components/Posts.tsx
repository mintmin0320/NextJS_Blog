'use client'

import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { useMemo, useState } from 'react'
import Image from './Image'
import Link from './Link'

const MAX_DISPLAY = 12

const Posts = ({ posts }) => {
  const tagList = useMemo(() => {
    const tagsSet = new Set(['전체'])
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagsSet.add(tag))
    })
    return Array.from(tagsSet)
  }, [posts])

  const [selectedTag, setSelectedTag] = useState('전체')

  const filteredPosts = useMemo(() => {
    if (selectedTag === '전체') {
      return posts
    }
    return posts.filter((post) => post.tags.includes(selectedTag))
  }, [posts, selectedTag])

  return (
    <div className="w-9/12 pt-4 flex flex-col gap-[16px] mo:hidden">
      <ul className="p-4 flex flex-wrap gap-2">
        {tagList.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              className={`rounded p-3 text-sm font-semibold py-3 cursor-pointer hover:bg-slate-100 hover:text-black ${
                selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>

      {/* Posts list */}
      <ul className="divide-y divide-gray-200 dark:divide-gray-500 place-content-center grid grid-cols-[repeat(auto-fill,280px)] gap-y-[142px] gap-x-[22px] mo:grid-cols-1">
        {!filteredPosts.length && 'No posts found.'}
        {filteredPosts.slice(0, MAX_DISPLAY).map((post, index) => {
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
                  className={`rounded-[16px] border mo:w-full ${
                    isEven ? 'h-[258px]' : 'h-[215px]'
                  }`}
                />

                <article>
                  <time className="font-[400] pt-2 text-[13px] flex justify-center" dateTime={date}>
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
  )
}

export default Posts
