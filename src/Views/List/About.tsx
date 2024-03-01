import React from 'react'

function About({pokemon}:{pokemon:any}) {
  return (
    <div className="w-full flex flex-col items-center mb-[2rem]">
        <section className="min-h-[40px] flex w-fit border-b">
            <div className="h-full mr-6 flex justify-end items-center w-[90px]">Height</div>
            <div className="h-full flex items-center min-w-[90px] text-left font-semibold">{pokemon.about?.height}</div>
        </section>
        <section className="min-h-[40px] flex w-fit border-b">
            <div className="h-full mr-6 flex justify-end items-center w-[90px]">Weight</div>
            <div className="h-full flex items-center min-w-[90px] text-left font-semibold">{pokemon.about?.weight}</div>
        </section>
        <section className="min-h-[40px] flex w-fit border-b">
            <div className="h-full mr-6 flex justify-end items-center w-[90px]">Abilities</div>
            <div className="h-full flex flex-col items-start min-w-[90px] text-left font-semibold">
                {
                    pokemon.about?.abilities?.map((ability:any, idx:number)=><p key={ability+idx}>. {ability}</p>)
                }
            </div>
        </section>
    </div>
  )
}

export default About