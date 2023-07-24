import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
            {/* IMAGE CONTAINER  */}
            <div className="relative w-full h-1/2 md:h-[70%]">
                {
                    singleProduct.img &&
                    <Image src={singleProduct.img} alt='single-img' fill className='object-contain' />
                }
            </div>
            {/* TEXT CONTAINER  */}
            <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center">
                <h1 className="text-3xl font-bold uppercase">
                    {singleProduct.title}
                </h1>
                <p className="text-justify">
                    {singleProduct.desc}
                </p>

                {/* ADDING PRICE CLIENT SIDE COMPONENT */}
                <Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options} />
            </div>
        </div>
    )
}

export default SingleProductPage