import { Deta } from 'deta'
import { NextApiRequest, NextApiResponse } from 'next'

const deta = Deta(process.env.DETA_KEY)

const base = deta.Base('links')

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req

  if (method === 'GET') {
    const { items } = await base.fetch([])
    res.status(200).json(items)
  } else if (method === 'POST') {
    const response = await base.put({
      url: 'https://deta.io',
      title: 'deta.io',
    })
    res.status(200).json(response)
  }
}

export default handler
