import React from 'react'
import styled from 'styled-components'
import Header from './Header'

type props = {
    content: React.ReactNode;
}

function Wrapper({content}:props) {
  return (
    <Container className='flex flex-col h-full items-center'>
        <Header/>
        <Content className="w-[1250px] flex flex-col items-center justify-between h-[calc(100%-76px)] max-h-[calc(100%-76px)]">
            {content}
        </Content>
    </Container>
  )
}

const Container = styled.div`
    
`
const Content = styled.div`
    @media only screen and (max-width: 1250px){
      width: 100%;
      padding: 0 1rem 2rem 1rem;
    }
`

export default Wrapper