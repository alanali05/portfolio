import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
function Navbar() {
    const [open, setopen] = useState(false)
    return (
        <div className="fixed z-10 top-5 w-full">
            <div className='max-w-6xl mx-auto h-20'>
                <div className="flex items-center justify-between gap-5 w-full h-full bg-white/5 backdrop-blur-2xl rounded-full px-10">
                    <h1 className="text-white text-[28px] font-semibold">SOLVE.</h1>
                    <ul className='hidden lg:flex items-center justify-between gap-10'>
                        <li className='text-[16px] text-white'><a href="">Home</a></li>
                        <li className='text-[16px] text-white'><a href="">Services</a></li>
                        <li className='text-[16px] text-white'><a href="">Achievement</a></li>
                        <li className='text-[16px] text-white'><a href="#about">About Us</a></li>
                    </ul>
                    <div className="hidden lg:flex gap-5">
                        <button className="bg-gradient-to-l from-slate-700 to-slate-800 py-3 px-5 rounded-[20px] relative z-20 sign-up">Sing Up</button>
                        <button className="bg-[#5F00FF] backdrop-blur-3xl text-white py-3 px-5 rounded-full">Sing In</button>
                    </div>

                    <HiMenuAlt3 className='flex lg:hidden text-white text-[34px]' onClick={() => setopen(true)} />

                    <div className={`fixed block lg:hidden top-[-20px] left-0 px-5 py-10 min-h-screen w-full bg-black/70 backdrop-blur-3xl ${open ? 'translate-x-0' : 'translate-x-[100%]'} space-y-10 transition-all duration-700`}>
                        <div className="relative flex flex-col gap-10">
                            <IoClose className='absolute top-0 right-1 text-[32px] text-white font-extrabold' onClick={() => setopen(false)} />
                            <ul className='flex items-start flex-col justify-between gap-10'>
                                <li className='text-[16px] text-white'><a href="">Home</a></li>
                                <li className='text-[16px] text-white'><a href="">Services</a></li>
                                <li className='text-[16px] text-white'><a href="">Achievement</a></li>
                                <li className='text-[16px] text-white'><a href="#about">About Us</a></li>
                            </ul>
                            <div className="flex gap-5">
                                <button className="bg-white/10 backdrop-blur-3xl text-white py-3 px-5 rounded-full">Sign up</button>
                                <button className="bg-[#5F00FF] backdrop-blur-3xl text-white py-3 px-5 rounded-full">Sing In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
