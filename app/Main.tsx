import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'
import Video from '@/components/Video'

export default function Home({ posts }) {
  return (
    <div className="flex flex-col">
      <div className="divide-y divide-gray-200 dark:divide-gray-700 flex justify-center">
        <Image src="/static/images/banner.jpeg" alt="avatar" width={393} height={393} />
      </div>
      <ScrollTopAndComment />
    </div>
  )
}
