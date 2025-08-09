import React from 'react'
import alan from '../images/alan.svg'
import quotes from '../images/quotes.svg'
function Testimonial() {
    return (
        <div className='bg-[#050020] py-20 px-10 '>
            <div className="max-w-5xl mx-auto relative isolate">
                    <div className="absolute bottom-[-200px] right-[-300px] bg-[#5F00FF] -z-20 blur-3xl opacity-15 rounded-full size-[300px]"></div>
                <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
                    <h1 className="text-white text-[34px] font-medium">
                        Testimonial
                    </h1>
                    <div className="rounded-2xl bg-white/15 flex flex-col gap-5 items-center md:flex-row p-5 min-h-[50vh]">
                        <img src={alan} className='size-[250px] md:w-[300px] lg:w-[400px] rounded-lg' alt="" />
                        <div className="flex flex-col items-center md:items-start text-center md:text-start justify-between gap-10 px-5 h-full">
                            <img src={quotes} alt="" />
                            <p className="text-white/75">Using this tool has completely transformed how our team operates. We’re more organized, meet our deadlines consistently, and collaboration has never been smoother. It's a game-changer!</p>
                            <div className="w-full flex items-center justify-between gap-5 flex-col md:flex-row">
                                <div className="flex flex-col">
                                    <p className="text-white text-lg font-medium">Ketul adani</p>
                                    <p className="text-white/50 text-sm">Ceo of xyz company</p>
                                </div>
                                <p className='size-[30px] rounded-full border-2 border-white'></p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonial
