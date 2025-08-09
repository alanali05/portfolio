import React from 'react'

function Footer() {
    return (
        <div className='bg-[#050020] pt-20 pb-10 px-4 md:px-10'>
            <div className="max-w-5xl mx-auto">

                <div className="grid grid-cols-12 gap-6 w-full md:p-5">
                    <div className="grid col-span-12 lg:col-span-6">
                        <div className="flex flex-col gap-5 px-4">
                            <h1 className="text-[34px] font-medium text-white">SOLVE.</h1>
                            <p className="text-white/90">Work together seamlessly with real-time updates and communication.</p>
                            <p className="text-white/75">Team Conditional & Policy</p>
                        </div>
                    </div>
                    <div className="grid col-span-12 md:col-span-6 lg:col-span-2 px-4">
                        <ul className='flex flex-col gap-4 '>
                            <h1 className="text-white font-medium text-xl">Pages</h1>
                            <li className='text-white/75'>Home</li>
                            <li className='text-white/75'>Services</li>
                            <li className='text-white/75'>Achievement</li>
                            <li className='text-white/75'>About Us</li>
                        </ul>
                    </div>
                    <div className="grid col-span-12 md:col-span-6 lg:col-span-2 px-4">
                        <ul className='flex flex-col gap-4'>
                            <h1 className="text-white font-medium text-xl">Company</h1>
                            <li className='text-white/75'>Customer</li>
                            <li className='text-white/75'>Enterprise</li>
                            <li className='text-white/75'>Partners</li>
                            <li className='text-white/75'>Job</li>
                        </ul>
                    </div>

                    <div className="grid col-span-12 md:col-span-6 lg:col-span-2">
                        <div className="flex gap-5 flex-col items-start md:items-center">
                            <button className="bg-white/10 backdrop-blur-3xl text-white py-3 px-6 rounded-full">Sing Up</button>
                            <button className="bg-[#5F00FF] backdrop-blur-3xl text-white py-3 px-6 rounded-full">Sing In</button>
                        </div>
                    </div>

                </div>
                <div className="w-full flex-col gap-5 flex items-center justify-center px-5 md:px-14 mt-10">
                     <div className="bg-white/25 rounded-full w-full h-[1px]"></div>
                     <p className="text-white/35">©solve. all right reserve</p>
                </div>
               
            </div>
        </div>
    )
}

export default Footer
