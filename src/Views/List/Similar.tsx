import React, { useContext } from 'react'
import Context from '../../store/context'
import { useNavigate } from 'react-router-dom'

const Similar = () => {
    const {state} = useContext(Context)
    const navigate = useNavigate()

    return <div className="w-full flex overflow-hidden overflow-x-auto items-center mb-[2rem]">
            <aside className="w-fit flex">
                {
                    state?.pokemons.map((val:any, idx:number)=>{
                        return <div key={`similar ${idx}`} onClick={()=>navigate(`/list/${val.id}`, {state:{pokemon: val}})} className="w-[230px] group cursor-pointer h-fit p-3 flex flex-col items-center shadow-md bg-white rounded-2xl m-[1rem] z-10 relative overflow-hidden">
                                    <section className="w-full min-h-[150px] bg-gray-100 flex justify-center relative rounded-lg mb-4">
                                        <img src={val.img} alt="" width={130} className='bottom-[1.3rem] absolute'/>
                                    </section>
                                    <h1 className="text-xl font-semibold">charizard</h1>
                                    <div className="scaleanimate hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.4)]"></div>
                                </div>
                        })
                }
                
            </aside>
        </div>
}

export default Similar