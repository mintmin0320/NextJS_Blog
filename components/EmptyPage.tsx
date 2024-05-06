import HomeRedirectButton from './HomeRedirectButton'
import PageTitle from './PageTitle'

export default function EmptyPage() {
  return (
    <div className="mt-24 text-center">
      <PageTitle>존재하지 않는 페이지 입니다! </PageTitle>
      <HomeRedirectButton />
    </div>
  )
}
