import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import Context from '../../store/context';
import { useNavigate, useParams } from 'react-router-dom';
import Stats from './Stats';
import Similar from './Similar';
import About from './About';

function Detail({pokemon}:{pokemon:{}}) {
    const {state} = useContext(Context)
    const [tab, setTab] = useState('About');
    const [theme, setTheme] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        setTheme(state.theme)
    }, [state.theme])

    const active = () => {
        return state.pokemons?.find((pokemon:any)=>pokemon.id === parseInt(`${params.id}`)) || {}
    }


    // const Stats = (theme:any) => {
        
    //     return <div className="w-full flex flex-col items-center mb-[2rem] px-8">
    //                 <section className="min-h-[40px] flex items-center w-full border-b">
    //                     <div className="h-full mr-6 flex justify-end items-center w-1/2">HP</div>
    //                     <div className="h-full flex items-center w-1/2 text-left font-semibold">
    //                         <aside className="h-2 w-full relative bg-gray-200">
    //                             <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}, rgb(229,231,235))`}} className={`bg-pink-500 w-[60%] h-full`}></div>
    //                         </aside>
    //                         <b className="ml-6 mr-3">60%</b>
    //                     </div>
    //                 </section>
    //                 <section className="min-h-[40px] flex items-center w-full border-b">
    //                     <div className="h-full mr-6 flex justify-end items-center w-1/2">Attack</div>
    //                     <div className="h-full flex items-center w-1/2 text-left font-semibold">
    //                         <aside className="h-2 w-full relative bg-gray-200">
    //                             <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}, rgb(229,231,235))`}} className={`bg-pink-500 w-[62%] h-full`}></div>
    //                         </aside>
    //                         <b className="ml-6 mr-3">62%</b>
    //                     </div>
    //                 </section>
    //                 <section className="min-h-[40px] flex items-center w-full border-b">
    //                     <div className="h-full mr-6 flex justify-end items-center w-1/2">Defense</div>
    //                     <div className="h-full flex items-center w-1/2 text-left font-semibold">
    //                         <aside className="h-2 w-full relative bg-gray-200">
    //                             <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}, rgb(229,231,235))`}} className={`bg-pink-500 w-[63%] h-full`}></div>
    //                         </aside>
    //                         <b className="ml-6 mr-3">63%</b>
    //                     </div>
    //                 </section>
    //                 <section className="min-h-[40px] flex items-center w-full border-b">
    //                     <div className="h-full mr-6 flex justify-end items-center w-1/2">Special Attack</div>
    //                     <div className="h-full flex items-center w-1/2 text-left font-semibold">
    //                         <aside className="h-2 w-full relative bg-gray-200">
    //                             <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}, rgb(229,231,235))`}} className={`bg-pink-500 w-[80%] h-full`}></div>
    //                         </aside>
    //                         <b className="ml-6 mr-3">80%</b>
    //                     </div>
    //                 </section>
    //                 <section className="min-h-[40px] flex items-center w-full border-b">
    //                     <div className="h-full mr-6 flex justify-end items-center w-1/2">Special Defense</div>
    //                     <div className="h-full flex items-center w-1/2 text-left font-semibold">
    //                         <aside className="h-2 w-full relative bg-gray-200">
    //                             <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}, rgb(229,231,235))`}} className={`bg-pink-500 w-[80%] h-full`}></div>
    //                         </aside>
    //                         <b className="ml-6 mr-3">80%</b>
    //                     </div>
    //                 </section>
    //                 <section className="min-h-[40px] flex items-center w-full border-b">
    //                     <div className="h-full mr-6 flex justify-end items-center w-1/2">Speed</div>
    //                     <div className="h-full flex items-center w-1/2 text-left font-semibold">
    //                         <aside className="h-2 w-full relative bg-gray-200">
    //                             <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}, rgb(229,231,235))`}} className={`bg-pink-500 w-[30%] h-full`}></div>
    //                         </aside>
    //                         <b className="ml-6 mr-3">30%</b>
    //                     </div>
    //                 </section>
    //             </div>
    // }


    return (
        <Container className="w-[600px] h-full bg-white flex flex-col items-center justify-between">
                <div className="w-full h-full flex flex-col items-center overflow-hidden overflow-y-auto relative z-10">
                    <div className="sm:p-5 w-full sticky top-0">
                        <section style={{background: `linear-gradient(to bottom, ${theme[1]}, ${theme[0]})`}} className={`banner-board w-full min-h-[280px] sm:min-h-[340px] sm:rounded-2xl p-2 sm:p-5 relative`}>
                            <div onClick={()=>navigate('/list')} className="flex justify-center items-center cursor-pointer rounded-xl bg-white w-[50px] sm:w-[64px] h-[50px] sm:h-[64px] absolute top-[1rem] left-[1rem] sm:top-[1.25rem] sm:left-[1.25rem] shadow-md">
                                <svg className={`w-[19px] h-[13px] sm:w-[22px] sm:h-[16px]`} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.70009 15.0333C8.96676 14.7667 9.09476 14.4445 9.08409 14.0667C9.07343 13.6889 8.93431 13.3667 8.66676 13.1L4.90009 9.33335H19.7668C20.1445 9.33335 20.4614 9.20535 20.7174 8.94935C20.9734 8.69335 21.101 8.3769 21.1001 8.00001C21.1001 7.62224 20.9721 7.30535 20.7161 7.04935C20.4601 6.79335 20.1436 6.66579 19.7668 6.66668H4.90009L8.70009 2.86668C8.96676 2.60001 9.10009 2.28312 9.10009 1.91601C9.10009 1.5489 8.96676 1.23246 8.70009 0.966681C8.43342 0.700014 8.11654 0.566681 7.74943 0.566681C7.38231 0.566681 7.06587 0.700014 6.80009 0.966681L0.700092 7.06668C0.566759 7.20001 0.472092 7.34446 0.416092 7.50001C0.360092 7.65557 0.332535 7.82224 0.333424 8.00001C0.333424 8.17779 0.361427 8.34446 0.417427 8.50001C0.473427 8.65557 0.567648 8.80001 0.700092 8.93335L6.83343 15.0667C7.07787 15.3111 7.3832 15.4333 7.74943 15.4333C8.11565 15.4333 8.43254 15.3 8.70009 15.0333Z" fill="black"/>
                                </svg>
                            </div>
                            <div className="w-full flex justify-center absolute left-0 right-0 -bottom-[3rem] sm:-bottom-[3.5rem]">
                                <img src={active()?.img} alt="" className={`w-[230px] sm:w-[280px]`}/>
                            </div>
                        </section>
                    </div>

                    <div className="w-full h-full flex flex-col items-center">
                        <section className="w-full min-h-fit flex flex-col items-center mt-[3rem]">
                            <b className='text-[2rem]'>{active()?.name}</b>
                            <div className="w-full flex items-center justify-center my-2">
                                <section className="mx-1 text-sm flex items-center justify-center rounded-[2rem] h-[35px] min-w-[80px] p-1 bg-gray-100">
                                🔥 Fire
                                </section>
                                <section className="mx-1 text-sm flex items-center justify-center rounded-[2rem] h-[35px] min-w-[80px] p-1 px-2 bg-gray-100">
                                🦋 Flying
                                </section>
                            </div>
                        </section>

                        <div className="w-full mt-6 h-full bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(217,217,217,0.34)] to-[rgba(255,255,255,1)]">
                            <div style={{boxShadow: '0 -25px 30px -1px rgb(0,0,0,.1)'}} className="w-full h-[0.4rem] blur-lg"></div>
                            <section className="w-full h-[40px] bg-white flex justify-center items-center mb-3 font-bold">{tab}</section>
                                {tab === 'About' && <About pokemon={active()}/>}
                                {tab === 'Stats' && <Stats theme={theme} stats={active()?.stats}/>}
                                {tab === 'Similar' && <Similar/>}
                            
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-[100px] px-5 flex items-center justify-center bg-[white]">
                    <section className="grid grid-cols-3 gap-2 p-2 w-[90%] sm:w-[70%] h-[65%] bg-[rgba(233,233,233,1)] rounded-[40px]">
                        <div onClick={()=>setTab('About')} className={`w-full h-full transition-all duration-100 ease-linear flex justify-center items-center rounded-[40px] ${tab==='About' && 'bg-white'} hover:bg-white cursor-pointer`}>About</div>
                        <div onClick={()=>setTab('Stats')} className={`w-full h-full transition-all duration-100 ease-linear flex justify-center items-center rounded-[40px] ${tab==='Stats' && 'bg-white'} hover:bg-white cursor-pointer`}>Stats</div>
                        <div onClick={()=>setTab('Similar')} className={`w-full h-full transition-all duration-100 ease-linear flex justify-center items-center rounded-[40px] ${tab==='Similar' && 'bg-white'} hover:bg-white cursor-pointer`}>Similar</div>
                    </section>
                </div>
            </Container>
    )


    
}

const Container = styled.div`
    @media only screen and (max-width: 600px){
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }

`


export default Detail