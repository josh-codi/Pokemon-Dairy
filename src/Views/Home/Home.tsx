import React, { useContext } from 'react'
import { Logo } from '../../Assets'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Context from '../../store/context';

function Home() {
  const {state} = useContext(Context)
  const navigate = useNavigate()

  return (
    <Container className='w-full h-full flex flex-col items-center justify-center'>
      <div className="h-fit w-full flex flex-col items-center">
        <img src={Logo} alt="" />
        <br />
        <h1 className="text-[2rem] font-bold flex">Poké<h1 style={{color: state.theme[0]}}>book</h1></h1>
        <p className='w-[300px] font-[300] text-center'>Largest Pokémon index with information about every Pokemon you can think of. </p>
        
        <form onSubmit={()=>{navigate('/list')}} style={{borderColor: state.theme[0]}} className="w-[450px] mt-[2rem] h-[50px] p-[7px] flex items-center border-4 rounded-[2rem] overflow-hidden">
            <input placeholder='Enter pokemon name' type="text" className="w-full h-full bg-transparent border-none outline-none pl-4 text-sm text-gray-500" />
            <button style={{background: state.theme[0]}} className={`min-w-[35px] min-h-[35px] rounded-full bg-[${state.theme[0]}] hover:bg-[${state.theme[1]}] flex justify-center items-center`}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2939 12.5786H13.3905L13.0703 12.2699C14.2297 10.9251 14.8669 9.20834 14.8656 7.43282C14.8656 5.96275 14.4297 4.52569 13.613 3.30337C12.7963 2.08105 11.6354 1.12837 10.2772 0.565793C8.91907 0.00322052 7.42457 -0.143974 5.98275 0.142823C4.54092 0.42962 3.21652 1.13753 2.17702 2.17702C1.13753 3.21652 0.42962 4.54092 0.142823 5.98275C-0.143974 7.42457 0.00322052 8.91907 0.565793 10.2772C1.12837 11.6354 2.08105 12.7963 3.30337 13.613C4.52569 14.4297 5.96275 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L12.5786 13.3905V14.2939L18.2962 20L20 18.2962L14.2939 12.5786ZM7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786Z" fill="white"/>
                </svg>
            </button>
        </form>

        <Link to={'/list'} className="underline mt-2">View all</Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
  overflow-y: auto;

  @media only screen and (max-width: 450px){
    form{
      width: 90%;
    }
    img{
      width: 70%;
    }
    h1{
      font-size: 1.4rem;
    }
    p{
      font-size: 0.8rem;
    }

  }
`

export default Home

