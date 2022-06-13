import { FC, MouseEvent, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Form: FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const onSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    await axios.post('/api/post', {
      name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      email: {
        rich_text: [
          {
            text: {
              content: email,
            },
          },
        ],
      },
      content: {
        rich_text: [
          {
            text: {
              content: content,
            },
          },
        ],
      }
    })
    console.log('ok')
  }
  return (
    <>
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

export default Form
