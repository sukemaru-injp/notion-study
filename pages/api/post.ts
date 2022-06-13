// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import notion from '../../libs/notion'
import { isEmpty } from 'ramda'

type Data = {
  res: any
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (isEmpty(req.body)) {
    return res.status(400).json({ res: new Error('no properties') })
  }
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process?.env?.NOTION_DATABASE_ID || '',
      },
      properties: {
        ...req.body
      }
    })
    res.status(200).json({ res: response })
  } catch (e) {
    res.status(500).json({ res: e })
  }
}

export default handler
