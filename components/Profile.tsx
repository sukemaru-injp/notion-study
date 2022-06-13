import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import type { ProfileType } from '../types'

interface Props extends ProfileType<ReactNode> {}

const Profile: FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <Div>
        <h3>name</h3>
        <h4>{props.name}</h4>
      </Div>

      <Div>
        <h3>age</h3>
        <h4>{props.age}</h4>
      </Div>

      <Div>
        <h3>like</h3>
        <h4>{props.like}</h4>
      </Div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 20px;
`

const Div = styled.div`
display: flex;
gap: 10px;
`

export default Profile

