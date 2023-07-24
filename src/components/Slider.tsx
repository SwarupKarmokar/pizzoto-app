"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    { id: 1, title: "always fresh and crispy hot piZZa", img: "/slide1.png" },
    { id: 2, title: "we deliver order everywhere you want", img: "/slide2.png" },
    // { id: 3, title: "try out best pizza with Pizzoto", img: "/slide3.jpg" },
]

const Slider = () => {
    const [currSlide, setCurrSlide] = useState<number>(0)


    // useEffect(() => {
    // const interval = setInterval(() => {
    //     setCurrSlide(prev => prev === data.length - 1 ? 0 : prev + 1);
    // }, 2000)
    //     return () => clearInterval(interval);
    // }, [])

    return (
        <div className='flex flex-col h-[calc(100vh-4rem)] lg:flex-row bg-fuchsia-50'>
            {/* Text Container  */}
            <div className='flex flex-1 items-center justify-center flex-col text-red-500'>
                <h1 className='text-5xl text-center uppercase font-bold p-4 md:text-6xl xl:text-7xl'>
                    {data[currSlide].title}
                </h1>
                <button className='bg-red-500 text-white py-2 px-4 rounded-md md:py-3 md:px5 xl:py-4 xl:px-6 '>Order Now</button>
            </div>
            {/* Image Container  */}
            <div className='w-full flex-1 relative '>
                <Image src={data[currSlide].img} fill alt='slider-image' className='object-cover' />
            </div>
        </div>
    )
}

export default Slider