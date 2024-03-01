import React from 'react'
type props = {
    theme: any,
    stats: any
}

const Stats = ({theme, stats}:props) => {
    
    return <div className="w-full flex flex-col items-center mb-[2rem] px-8">
                <section className="min-h-[40px] flex items-center w-full border-b">
                    <div className="h-full mr-6 flex justify-end items-center w-1/2">HP</div>
                    <div className="h-full flex items-center w-1/2 text-left font-semibold">
                        <aside className="h-2 w-full relative bg-gray-200">
                            <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}`}} className={`w-[${stats?.HP}%] h-full`}></div>
                        </aside>
                        <b className="ml-6 mr-3">{stats?.HP}%</b>
                    </div>
                </section>
                <section className="min-h-[40px] flex items-center w-full border-b">
                    <div className="h-full mr-6 flex justify-end items-center w-1/2">Attack</div>
                    <div className="h-full flex items-center w-1/2 text-left font-semibold">
                        <aside className="h-2 w-full relative bg-gray-200">
                            <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}`}} className={`w-[${stats?.attack}%] h-full`}></div>
                        </aside>
                        <b className="ml-6 mr-3">${stats?.attack}%</b>
                    </div>
                </section>
                <section className="min-h-[40px] flex items-center w-full border-b">
                    <div className="h-full mr-6 flex justify-end items-center w-1/2">Defense</div>
                    <div className="h-full flex items-center w-1/2 text-left font-semibold">
                        <aside className="h-2 w-full relative bg-gray-200">
                            <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}`}} className={`w-[${stats?.defense}%] h-full`}></div>
                        </aside>
                        <b className="ml-6 mr-3">${stats?.defense}%</b>
                    </div>
                </section>
                <section className="min-h-[40px] flex items-center w-full border-b">
                    <div className="h-full mr-6 flex justify-end items-center w-1/2">Special Attack</div>
                    <div className="h-full flex items-center w-1/2 text-left font-semibold">
                        <aside className="h-2 w-full relative bg-gray-200">
                            <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}`}} className={`w-[${stats?.special_attack}%] h-full`}></div>
                        </aside>
                        <b className="ml-6 mr-3">${stats?.special_attack}%</b>
                    </div>
                </section>
                <section className="min-h-[40px] flex items-center w-full border-b">
                    <div className="h-full mr-6 flex justify-end items-center w-1/2">Special Defense</div>
                    <div className="h-full flex items-center w-1/2 text-left font-semibold">
                        <aside className="h-2 w-full relative bg-gray-200">
                            <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}`}} className={`w-[${stats?.sepecia_defense}%] h-full`}></div>
                        </aside>
                        <b className="ml-6 mr-3">${stats?.special_defense}%</b>
                    </div>
                </section>
                <section className="min-h-[40px] flex items-center w-full border-b">
                    <div className="h-full mr-6 flex justify-end items-center w-1/2">Speed</div>
                    <div className="h-full flex items-center w-1/2 text-left font-semibold">
                        <aside className="h-2 w-full relative bg-gray-200">
                            <div style={{background: `linear-gradient(to right, ${theme[0]}, ${theme[1]}`}} className={`w-[${stats?.speed}%] h-full`}></div>
                        </aside>
                        <b className="ml-6 mr-3">${stats?.speed}%</b>
                    </div>
                </section>
            </div>
}


export default Stats