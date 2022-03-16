import { useEffect, useState } from 'react'

import Container from 'components/Container'

interface Link {
  url: string
  title: string
}

export default function Home() {
  const [links, setLinks] = useState<Link[]>([
    {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Hello World',
    },
    {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Hello World',
    },
  ])

  const fetchLinks = async () => {
    const response = await fetch('api/links')
    console.log(response)
  }

  useEffect(() => {
    fetchLinks()
  }, [])

  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        {links.map(link => (
          <a key={link.title} href={link.url}>
            {link.title}
          </a>
        ))}
      </div>
    </Container>
  )
}
