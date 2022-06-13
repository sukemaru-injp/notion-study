import { NextPage, GetServerSideProps } from 'next'

import notion from '../../libs/notion'
interface PageProps {
  res: any
  page: any
}

const NotionPage: NextPage<PageProps> = ({ res, page }: PageProps) => {
  console.log('fetch', res, page)
  return (
    <>
      <h2>Notion Index</h2>
    </>
  )
}

export default NotionPage

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await notion.databases.retrieve({ database_id: process?.env?.NOTION_DATABASE_ID || '' })

  const page = await notion.pages.retrieve({ page_id: process?.env?.NOTION_PAGE_ID || '' })

  // Pass data to the page via props
  return { props: { res, page } }
}

