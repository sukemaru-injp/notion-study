import { NextPage } from 'next'
import { MouseEvent } from 'react'
import styled from 'styled-components'
import axios from 'axios'

// import notion from '../../libs/notion'

const NotionAddPage: NextPage = () => {
  const onSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    await axios.post('/api/post', {
      name: {
        title: [
          {
            text: {
              content: '巽さん',
            },
          },
        ],
      },
      email: {
        rich_text: [
          {
            text: {
              content: 'tatsumi@test.jp',
            },
          },
        ],
      },
      content: {
        rich_text: [
          {
            text: {
              content: 'Very Bad',
            },
          },
        ],
      }
    })
    console.log('ok')
  }

  return (
    <>
      <h2>Notion Add</h2>

      <Button 
        onClick={(e) => onSubmit(e)}>
        送信
      </Button>
    </>
  )
}

const Button = styled.button`
padding: 10px 15px;
background-color: #32a852;
`

export default NotionAddPage
