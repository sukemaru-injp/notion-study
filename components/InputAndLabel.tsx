import { FC, ReactNode, ComponentProps } from 'react'
import styled from 'styled-components'

interface Props extends ComponentProps<'input'> {
  label: ReactNode
}
const InputAndLabel: FC<Props> = (props: Props) => {
  return (
    <>
      <Wrapper>
        <Label>{props.label}</Label>
        <Input
          value={props.value}
          placeholder={props.placeholder}
          onInput={props.onInput}
          onChange={props.onChange} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 5px;
`

const Label = styled.span`
min-width: 150px;
text-align: center;
`

const Input = styled.input`
padding: 10px 5px;
width: 80%;
border: 1px solid #ccc;
border-radius: 5px;
`

export default InputAndLabel
