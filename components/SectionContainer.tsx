import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="w-full sm:w-9/12 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-full m:max-w-7xl xl:px-0">
      {children}
    </section>
  )
}
