import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { background } from '../../Assets'
import { useNavigate } from 'react-router-dom'

type props = {
  content: ReactNode,
  close?: ()=>void,
  position: 'center'|'right'|'left',
  closeRoute?: string
}

function ModalWrapper({content, close, position, closeRoute}:props) {
  const navigate = useNavigate()
  return (
    <div className={`w-screen h-screen z-50 fixed top-0 right-0 left-0 bottom-0 flex justify-${position === 'center'?'center':'end'} items-center bg-[rgb(0,0,0,.5)]`}>
        <div onClick={()=>{
          if(close){
            close()
          }
          if(closeRoute){
            navigate(closeRoute)
          }
          else{
            navigate('/list')
          }
        }} className="w-full h-full absolute top-0 right-0 left-0 bottom-0 z-10"></div>
        
        {
          position === 'center' && <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 pointer-events-none">
            <img src={background} alt="" className='w-full h-full object-cover'/>
          </div>
        }
        
        {
          position === 'center' && <CenteredContent className="scaleanimate rounded-3xl bg-white overflow-hidden flex flex-col min-w-[300px] min-h-[200px] z-20">
              {content}
          </CenteredContent>
        }

        {
          position === 'right' && <RightContent className='min-w-[500px] h-full bg-white animatefromright z-20'>
            {content}
          </RightContent>
        }
        
    </div>
  )
}

const CenteredContent = styled.div`
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 10px -1px gray;
`
const RightContent = styled.div`
    /* background-image: url(${background}); */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 10px -1px gray;

    @media only screen and (max-width: 500px){
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
    
`

export default ModalWrapper