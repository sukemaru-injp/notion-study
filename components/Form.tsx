import { FC, MouseEvent, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import InputAndLabel from './InputAndLabel'

const Form: FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  const reset = () => {
    setContent('')
    setEmail('')
    setName('')
  }

  const onSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setLoading(true)
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
    setLoading(false)
    reset()
    console.log('ok')
  }
  return (
    <>
      <FormWrapper>
        <InputAndLabel
          label={'名前'}
          value={name}
          disabled={loading}
          onChange={(e) => setName(e.target.value)} />

        <InputAndLabel
          label={'Email'}
          value={email}
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)} />

        <InputAndLabel
          label={'内容'}
          value={content}
          disabled={loading}
          onChange={(e) => setContent(e.target.value)} />

        <Button 
          disabled={loading}
          onClick={(e) => onSubmit(e)}>
          送信
        </Button>
      </FormWrapper>
    </>
  )
}

const FormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
flex-direction: column;
`

const Button = styled.button`
padding: 10px 15px;
margin: 30px 0;
color: #fff;
width: 100px;
background-color: #32a852;
text-align: center;
border-radius: 5px;

&:disabled {
  background-color: #eee;
}
`

export default Form
