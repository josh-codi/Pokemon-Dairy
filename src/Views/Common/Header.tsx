import React, { useContext } from 'react'
import { Logo } from '../../Assets'
import useMain from '../Hooks/useMain'
import ModalWrapper from './ModalWrapper'
import styled from 'styled-components'
import Context from '../../store/context'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const {modalStatus, onModal, offModal} = useMain()
    const {state, dispatch} = useContext(Context)

    const setThemeColor = (color: 'primary'|'secondary'|'tertiary') => {
        let theme = color === 'primary' ? ['rgba(232,83,130,1)', 'rgba(232,83,130,.7)'] :
                    color === 'secondary' ? ['rgba(57,186,223,1)', 'rgba(57,186,223,.7)'] :
                    ['rgba(225,167,37,1)', 'rgba(225,167,37,.7)']

        dispatch({type: 'theme', content: theme});
        offModal()
    }
    return (
        <Container className='h-[75px] bg-white shadow-lg w-full flex items-center justify-between px-10 z-30'>
            <Brand className="flex items-center">
                <img onClick={()=>navigate('/')} src={Logo} alt="" width={130} className='mt-7 mr-4 hover:scale-95 cursor-pointer'/>
                <h1 onClick={()=>navigate('/')} className="text-[1.4rem] font-bold flex cursor-pointer">Poke <h1 style={{color: state.theme[0]}}>book</h1></h1>
            </Brand>
            <Search className="w-[450px] flex h-[40px] border rounded-[2rem] items-center overflow-hidden shadow-md">
                <div className="flex items-center justify-center w-[50px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#DFDFDF"/>
                    </svg>
                </div>
                <input placeholder='Enter pokemon name' type="text" className="w-full h-full text-sm text-gray-500" />
            </Search>
            <button onClick={()=>onModal()} className="min-w-[50px] w-[50px] min-h-[50px] h-[50px] rounded-full border border-gray-600 p-[0.3rem] group">
                <div style={{backgroundColor: state.theme[0]}} className="w-full h-full rounded-full"></div>
            </button>

            {
                modalStatus ? <ModalWrapper position='center' close={()=>{offModal()}} content={<div className='w-full h-[220px] flex flex-col'>
                    <section className="w-full min-h-[50px] flex items-center justify-center">Choose Theme</section>
                    <section className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <button onClick={()=>setThemeColor('primary')} style={{border: `${state.theme[0] === 'rgba(232,83,130,1)' && '1px solid'}`}} className="w-[60px] h-[60px] rounded-full hover:border border-gray-600 p-[0.3rem] mx-3 group">
                            <div className="w-full bg-primary h-full rounded-full"></div>
                        </button>
                        <button onClick={()=>setThemeColor('secondary')} style={{border: `${state.theme[0] === 'rgba(57,186,223,1)' && '1px solid'}`}} className="w-[60px] h-[60px] rounded-full hover:border border-gray-600 p-[0.3rem] mx-3 group">
                            <div className="w-full h-full bg-secondary rounded-full"></div>
                        </button>
                        <button onClick={()=>setThemeColor('tertiary')} style={{border: `${state.theme[0] === 'rgba(225,167,37,1)' && '1px solid'}`}} className="w-[60px] h-[60px] rounded-full hover:border border-gray-600 p-[0.3rem] mx-3 group">
                            <div className="w-full h-full bg-tertiary rounded-full"></div>
                        </button>
                    </section>
                </div>}/> : <></>
            }
        </Container>
    )
}

const Container = styled.div`
    @media only screen and (max-width: 766px){
        padding: 0 1rem;
    }
    
`

const Brand = styled.div`
    @media only screen and (max-width: 953px){
        img{
            display: none;
        }
    }
`

const Search = styled.div`
    @media only screen and (max-width: 763px){
        width: 300px;
    }
    @media only screen and (max-width: 530px){
        display: none;
    }
`

export default Header