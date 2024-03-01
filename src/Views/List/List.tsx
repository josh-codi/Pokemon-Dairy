import React, { useContext, useEffect, useState } from 'react'
import useMain from '../Hooks/useMain'
import GridContent from '../Common/GridContent'
import Wrapper from '../Common/Wrapper'
import { data } from '../mockData'
import Detail from './Detail'
import ModalWrapper from '../Common/ModalWrapper'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Paginate from '../Common/Paginate'
import { paginationSegment } from '../Common/PaginatSegments'
import Context from '../../store/context';


function List() {
    const {state, dispatch} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation();
    const params = useParams()
    const {dropName, dropStatus, offDrop, onDrop, modalStatus, onModal, offModal, modalContent} = useMain()
    const [active, setActive]=useState(1)


    const [show, setShow] = useState(8)
    const counts = [8, 12, 16, 24]
    useEffect(()=>{
        if(params.id){
            onModal(<Detail pokemon={location.state?.pokemon}/>)
        }else{offModal()}
        // eslint-disable-next-line
    }, [params])

    const [theme, setTheme] = useState([])

    useEffect(()=>{
        dispatch && dispatch({type: 'pokemon', content: data})
        // eslint-disable-next-line
    }, [])
    useEffect(()=>{
        setTheme(state?.theme)
    }, [state?.theme])


    return (
        <Wrapper content={<>
            <section className='h-[calc(100%-55px)] overflow-hidden overflow-y-auto pt-[3rem] w-full pb-[3rem]'>
                <GridContent cards={<>
                    {
                        paginationSegment(state?.pokemons, show)[active-1]?.map((val: any, idx: number)=>idx < show ? 
                        <Card key={idx} className='flex justify-center relative h-[320px] group'>
                            <div  className="content w-[280px] group-hover:z-20 h-fit p-3 flex flex-col items-center shadow-md bg-white rounded-2xl mt-[3rem] z-10">
                                <section className="w-full min-h-[150px] bg-gray-100 flex justify-center relative rounded-lg mb-4">
                                    <img src={val.img} alt="" width={190} className='bottom-[1.3rem] absolute'/>
                                </section>
                                <h1 className="text-xl font-semibold">charizard</h1>
                                <div className="w-full flex items-center justify-center mt-2">
                                    <section className="mx-1 text-sm flex items-center justify-center rounded-[2rem] h-[35px] min-w-[80px] p-1 bg-gray-100">
                                    🔥 Fire
                                    </section>
                                    <section className="mx-1 text-sm flex items-center justify-center rounded-[2rem] h-[35px] min-w-[80px] p-1 px-2 bg-gray-100">
                                    🦋 Flying
                                    </section>
                                </div>
                                <div onClick={()=>navigate(`/list/${val.id}`, {state: {pokemon: val}})} style={{background: theme?.[0]}} className={`button-link hidden w-full cursor-pointer bg-[${theme?.[0]}] hover:bg-[${theme?.[1]}] rounded-xl text-white group-hover:flex items-center transition-all duration-100 ease-linear mt-[1.5rem] justify-between px-3 h-[40px]`}>
                                    <p className="text-sm">View Pokemon</p>
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99992 0.75C5.83325 0.75 2.27492 3.34167 0.833252 7C2.27492 10.6583 5.83325 13.25 9.99992 13.25C14.1666 13.25 17.7249 10.6583 19.1666 7C17.7249 3.34167 14.1666 0.75 9.99992 0.75ZM9.99992 11.1667C7.69992 11.1667 5.83325 9.3 5.83325 7C5.83325 4.7 7.69992 2.83333 9.99992 2.83333C12.2999 2.83333 14.1666 4.7 14.1666 7C14.1666 9.3 12.2999 11.1667 9.99992 11.1667ZM9.99992 4.5C8.61659 4.5 7.49992 5.61667 7.49992 7C7.49992 8.38333 8.61659 9.5 9.99992 9.5C11.3833 9.5 12.4999 8.38333 12.4999 7C12.4999 5.61667 11.3833 4.5 9.99992 4.5Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </Card> : <div className='hidden' key={idx}/>
                        )
                    }
                </>}/>
            </section>
                
            <BottomNav className="bottom-nav w-full flex justify-between">
                <section>
                    {
                        state?.pokemons.length > 8 ? <Paginate total={state?.pokemons.length} active={active} setActive={(val:number)=>setActive(val)} size={show}/> : 
                        <></>
                    }
                </section>
                
                
                <div className="pageSize p-2 pr-3 flex items-center h-[45px] w-[100px] bg-gray-200 rounded-xl relative">
                    <div className="w-[45px] h-full bg-white rounded-lg mr-4 flex justify-center items-center text-black">{show}</div>
                    <button onClick={()=>onDrop('counter')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                    {
                        dropStatus && dropName === 'counter' ? <section className="absolute drop-up  bottom-[59px] bg-white min-h-[100px] w-[150px] right-0 flex flex-col items-center shadow-lg rounded-lg animatefrombottom p-1 z-20">
                        {counts.map((count, idx)=>count !== show ? <b key={`count-${idx}`} onClick={()=>{
                            if (count <= state?.pokemons.length){
                                setShow(count)
                            }
                            setActive(1)
                            offDrop();
                        }} className={`py-2 hover:bg-gray-100 cursor-pointer rounded-lg w-full text-center`}>{count}</b> : <b key={`count - ${idx}`}/>)}
                        </section> : <></>
                    }
                </div>
                {
                    dropStatus && <div onClick={()=>offDrop()} className="w-screen h-screen bg-transparent fixed top-0 bottom-0 right-0 left-0 z-10"></div>
                }
                
            </BottomNav>
            
            {
                modalStatus && <ModalWrapper closeRoute='/list' content={modalContent} position='right'/>
            }
            </>}/>
    )
}

const BottomNav = styled.div`
    @media only screen and (max-width: 530px){
        flex-direction: column-reverse;

        .pageSize{
            margin-bottom: 1rem;
        }
        .drop-up{
            left: 0;
            right: unset
        }
    }
`


const Card = styled.div`
    width: 100%;

    @media only screen and (max-width: 600px){
        .content{
            width: 360px;
        }
    }
    @media only screen and (max-width: 450px){
        .content{
            width: 100%;
        }
    }
`

export default List