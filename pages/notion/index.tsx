import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'

import styled from 'styled-components'

import notion from '../../libs/notion'
interface PageProps {
  res: unknown
}

const NotionPage: NextPage<PageProps> = ({ res }: PageProps) => {
  console.log('fetch', res)
  return (
    <>
      <Page>
        <h2>Notion Index</h2>
        <Link href={'/notion/add'} passHref>
          <Atag>追加したい</Atag>
        </Link>
      </Page>
    </>
  )
}

const Atag = styled.a`
color: #0366fc;
`

const Page = styled.div`
padding: 30px;
`

export default NotionPage

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await notion.databases.query({ database_id: process?.env?.NOTION_DATABASE_ID || '' })
  return { props: { res } }
}

