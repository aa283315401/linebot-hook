import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const data = req.body
  console.log('✅ 收到資料：', data)

  res.status(200).json({ message: '我收到資料了！' })
}
