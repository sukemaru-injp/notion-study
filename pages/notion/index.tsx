import { NextPage, GetServerSideProps } from 'next'

import notion from '../../libs/notion'
interface PageProps {
  res: any
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
  // Fetch data from external API
  const res = await notion.databases.query({ database_id: process?.env?.NOTION_DATABASE_ID || '' })

  // Pass data to the page via props
  return { props: { res } }
}

