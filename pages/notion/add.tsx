import { NextPage } from 'next'
import styled from 'styled-components'

import Link from 'next/link'

import Form from '../../components/Form'

const NotionAddPage: NextPage = () => {
  return (
    <>
      <Page>
        <h2>Notion Add</h2>
        <Link href={'/notion'} passHref>
          <Atag>一覧に行きます</Atag>
        </Link>

        <Form />
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

export default NotionAddPage
