import React from 'react'

const Hero = () => {
  return (
    <main className="container">
        <div className="h-screen pt-[72px] flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col gap-2 text-center">
                <p className='text-zinc-700 text-xl sm:text-2xl md:text-3xl'>Hello, I'm</p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">João Victor Novais</h1>
                <p className="text-2xl sm:text-4xl md:text-5xl text-[#3C096C] font-semibold">Software Engineer</p>
            </div>
            <div className='flex items-center justify-start gap-4'>
                <button className="bg-[#10002B] text-[#fff] sm:text-xl px-4 py-2 rounded-md hover:bg-[#240046] transition-all duration-200">Contact me</button>
                <button className="bg-[#fff] text-[#9D4EDD] hover:text-[#5A189A] hover:border-[#5A189A] sm:text-xl px-4 py-2 rounded-md border-2 border-[#9D4EDD] transition-all duration-200">See my works</button>
            </div>
        </div>
    </main>
  )
}

export default Hero