import React, { ReactNode } from 'react'
import styled from 'styled-components'

function GridContent({cards}:{cards:ReactNode}) {
  return (
    <Grid className='asas grid grid-cols-4 gap-2 w-full h-fit'>
        {cards}
    </Grid>
  )
}

const Grid = styled.div`
  @media only screen and (max-width: 1120px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 889px){
    grid-template-columns: repeat(2, 1fr);
    width: fit-content;
    margin: auto;
  }
  @media only screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: auto;
  }
`

export default GridContent