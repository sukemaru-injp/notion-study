import { NextPage, GetServerSideProps } from 'next'

import notion from '../../libs/notion'
interface PageProps {
  res: unknown
}

const NotionPage: NextPage<PageProps> = ({ res }: PageProps) => {
  console.log('fetch', res)
  return (
    <>
      <h2>Notion Index</h2>
    </>
  )
}

export default NotionPage

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await notion.databases.query({ database_id: process?.env?.NOTION_DATABASE_ID || '' })
  return { props: { res } }
}

