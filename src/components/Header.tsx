import { FC } from 'react'
import styled from 'styled-components'

const Header: FC = () => {
  return (
    <HeaderStyle>
      <h2>NotionTest</h2>
    </HeaderStyle>
    
  )
}

const HeaderStyle = styled.header`
position: sticky;
width: 100%;
height: 60px;
color: #fff;
background-color: #32a852;
display: flex;
align-items: center;
padding: 0 10px;
`

export default Header
