import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
    return (
        <div className='w-screen overflow-x-scroll text-red-500'>
            {/* WRAPPER  */}
            <div className='w-max flex'>
                {/* SINGLE PRODUCT  */}
                {
                    featuredProducts.map(item => (
                        <div className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]' key={item.id}>
                            {/* IMAGE CONTAINER  */}
                            {
                                item.img &&
                                <div className='relative flex-1 w-full hover:rotate-[50deg] transition-all duration-500'>
                                    <Image src={`${item.img}`} alt='fetured-image' fill className='object-contain' />
                                </div>
                            }
                            {/* TEXT CONTAINER  */}
                            <div className='flex-1 flex flex-col gap-4 items-center justify-center text-center'>
                                <h1 className='text-xl font-bold uppercase mt-3'>
                                    {item.title}
                                </h1>
                                <p className='text-justify px-5'>
                                    {item.desc}
                                </p>
                                <span className='text-xl font-bold'>₹{item.price}</span>
                                <button className='bg-red-500 text-white p-2 rounded-md'>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured