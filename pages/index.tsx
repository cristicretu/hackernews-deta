import { useEffect, useState } from 'react'

import humanizeUrl from 'humanize-url'
import useSWR from 'swr'

import Container from 'components/Container'
import fetcher from 'lib/fetcher'

interface Link {
  url: string
  title: string
}

export default function Home() {
  const { data, error } = useSWR('/api/links', fetcher)
  const [links, setLinks] = useState<Link[]>([])

  const fetchLinks = async () => {
    const response = await fetch('api/links')
    setLinks(await response.json())
  }

  useEffect(() => {
    fetchLinks()
  }, [])

  if (error)
    return (
      <Container>
        <h1>Something went wrong</h1>
        <h5>Please refresh the page and try again</h5>
      </Container>
    )
  if (!data)
    return (
      <Container>
        <div className='mx-auto flex items-center justify-center'>
          <svg
            className='animate-spin h-8 w-8 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        </div>
      </Container>
    )

  return (
    <Container>
      <div className='flex flex-col items-center mx-auto justify-center py-2 max-w-2xl space-y-10'>
        {data.map((link: Link) => (
          <div
            key={link.title}
            className='w-full rounded-md border border-gray-200 p-4'
          >
            <a href={link.url} className='flex space-x-2 items-center'>
              <h2 className='text-xl font-bold text-gray-400 hover:text-gray-200'>
                {link.title}
              </h2>
              <h5 className='text-gray-500 hover:text-blue-500'>
                ({humanizeUrl(link.url)})
              </h5>
            </a>
          </div>
        ))}
      </div>
    </Container>
  )
}
