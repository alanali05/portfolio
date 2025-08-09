import React from 'react'

function Email() {
  return (
    <div className='bg-[#050020] py-20 px-10'>
      <div className="max-w-5xl mx-auto">
        <div className="w-full flex items-center justify-center flex-col gap-5">
            <h1 className="text-white font-semibold text-3xl">So, what are you waiting for?</h1>
            <span className='text-white/65 text-base'>Stay Updated with the Latest News, Tips, and Updates!</span>
            <div className="flex items-center justify-center flex-col md:flex-row gap-5 md:gap-2">
                <input type="email" inputMode='email' className='bg-white/15 py-4 px-8 placeholder:px-2 rounded-sm placeholder:text-white/50 caret-white/50' placeholder='Enter Your Email'/>
                <button className="bg-[#5F00FF] text-white rounded-sm py-4 px-6">Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Email
