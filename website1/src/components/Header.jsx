import React from 'react'
import Navbar from './Navbar'
import first from '../images/Group8.svg'
import second from '../images/Group9.svg'
import third from '../images/Group10.svg'
import fourth from '../images/Hero.png'
import fifth from '../images/Hero2.svg'
function Header() {
  return (
    <>
      <div className='bg-[url(./images/header.svg)] bg-cover bg-no-repeat min-h-[120vh] isolate w-full pt-28'>
        <div className="max-w-6xl mx-auto min-h-full flex flex-col items-center justify-end gap-14">
          <div className="flex w-full items-center justify-center gap-4 flex-col">
            <h1 className="text-[22px] text-white">Welcome to Solve.</h1>
            <h1 className="text-[36px] md:text-[52px] font-semibold text-white text-center">Mange Your Task <br />
              Wfficiently</h1>
            <p className="text-white text-lg text-center">Solve Your Project Management Problems <br />
              For Your Satisfaction </p>
          </div>
          <div className="grid md:grid-cols-3 items-center justify-items-center gap-10">
            <div className="w-[300px] flex flex-col justify-between items-center p-5 rounded-xl bg-white/5 backdrop-blur-3xl gap-10">
              <div className="flex flex-col gap-5">
                <img src={first} alt="" className='size-[40px]' />
                <h1 className='text-white text-lg'>Best interaction achievement
                  award</h1>
              </div>
              <p className=" text-[#5F00FF]">Visit Solve.com</p>
            </div>
            <div className="w-[300px] flex flex-col justify-between items-center p-5 rounded-xl bg-white/5 backdrop-blur-3xl gap-10">
              <div className="flex flex-col gap-5">
                <img src={second} alt="" className='size-[40px]' />
                <h1 className='text-white text-lg'>Best interaction achievement
                  award</h1>
              </div>
              <p className=" text-[#5F00FF]">Visit Solve.com</p>
            </div>
            <div className="w-[300px] flex flex-col justify-between items-center p-5 rounded-xl bg-white/5 backdrop-blur-3xl gap-10">
              <div className="flex flex-col gap-5">
                <img src={third} alt="" className='size-[40px]' />
                <h1 className='text-white text-lg'>Best interaction achievement
                  award</h1>
              </div>
              <p className=" text-[#5F00FF]">Visit Solve.com</p>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <Hero2 />
    </>
  )
}
const Hero = () => {
  return (
    <div className="bg-[#050020] py-20 relative">
      <div className="size-[300px] rounded-full bg-[#5F00FF] blur-3xl opacity-35 absolute 
      bottom-[-150px] right-[-150px] z-10"></div>
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col gap-7">
          <h1 className="text-white text-2xl font-semibold tracking-wider scroll-my-32" id='about'>Who we are?</h1>
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <img src={fourth} alt="" className='size-[350px] md:size-[400px] lg:size-[420px]' />
            <div className="flex flex-col items-center text-center md:text-left md:items-start gap-7">

              <div className="flex gap-3">
                <h1 className='text-white font-semibold text-lg text-[58px]'>24</h1> <h2 className='text-white/75 flex items-center'>Years <br />
                  Experience</h2>
              </div>
              {/* second */}
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex gap-3">
                  <h1 className='text-white font-semibold text-lg w-full flex items-center justify-center text-[58px]'>1M</h1> <h2 className='text-white/75 flex items-center justify-center'>Users <br />
                    Satisfaction</h2>
                </div>
                <div className="flex gap-3 ring">
                  <h1 className='text-white font-semibold text-lg w-full flex items-center justify-center text-[58px]'>10k</h1> <h2 className='text-white/75 flex items-center justify-center'>Official <br />
                    Subscribers</h2>
                </div>
              </div>
              <p className="text-white/75">
                Simplify your workflow with our intuitive task management tool, designed to help you stay on top of your daily responsibilities and long-term goals.
              </p>
              <h1 className="text-white">Streamline Your Workflow, Achieve More.</h1>
              <button className="bg-[#5F00FF] backdrop-blur-3xl text-white py-3 px-6 rounded-sm">Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Hero2 = () => {
  return (
    <div className="bg-[#050020] py-20 px-10 relative isolate">
      <div className="absolute bottom-[-50px] left-0 bg-[#5F00FF] z-10 blur-3xl opacity-25 rounded-full size-[300px]"></div>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-7 items-start">
          <h1 className="text-white text-2xl font-semibold tracking-wider text-center md:text-left">Built for endless uses,
            Across all teams.</h1>
          <div className="flex flex-col gap-5 md:flex-row w-full">
            <img src={fifth} alt="" className='size-[350px] md:size-[400px] lg:size-[420px] relative z-20' />
            <div className="flex flex-col items-start justify-between gap-7">
              {/* buttons */}
              <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-5">
                <button className="text-lg font-medium rounded-full text-[#5F00FF] border border-[#5F00FF] py-3 px-6">Company Benefit</button>
                <button className="text-lg font-medium rounded-full bg-white/10 text-white py-3 px-6">Team Management</button>
                <button className="text-lg font-medium rounded-full bg-white/10 text-white py-3 px-6">Road Map</button>
              </div>

              <h1 className="text-white font-medium text-[34px]">Company main platform</h1>
              <p className="text-white/75">Simplify your workflow with our intuitive task management tool, designed to help you stay on top of your daily responsibilities and long-term goals.</p>
              <p className="text-white/75">Our platform grows with your business, offering scalable solutions that adapt to your changing needs, Customize your workflow to match your team's unique processes, so you can work smarter, not harder.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
