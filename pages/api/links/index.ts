import { Deta } from 'deta'
import { NextApiRequest, NextApiResponse } from 'next'

const deta = Deta(process.env.DETA_KEY)

const base = deta.Base('links')

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req

  // if (req.method === 'POST') {
  //   const test = await base.put(body)
  //   res.status(201).json({ test })
  // } else if (req.method === 'GET') {
  //   const { id } = params
  //   const data = await base.get(id)
  //   res.status(200).json(data)
  // }
  // res.status(200).json({ deta })
}

export default handler
