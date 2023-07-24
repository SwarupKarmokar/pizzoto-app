import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
    return (
        <div className='flex flex-wrap text-red-500'>
            {
                pizzas.map(item => (
                    <Link className='w-full h-[60vh] border-b-2 border-r-2 border-red-500 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col justify-between group odd:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>
                        {/* IMAGE CONTAINER  */}
                        {
                            item.img &&
                            <div className="relative h-[88%]">
                                <Image src={item.img} fill alt='category-image' className='object-contain' />
                            </div>
                        }
                        {/* TEXT CONTAINER  */}
                        <div className="flex items-center justify-between font-bold">
                            <h1 className="text-2xl uppercase p-2 md:text-sm">
                                {item.title}
                            </h1>
                            <h2 className="text-2xl group-hover:hidden md:text-sm">
                                ₹{item.price}
                            </h2>
                            <button className='hidden group-hover:block uppercase bg-red-500 text-white  md:text-sm rounded-md py-1 px-2'>Add to cart</button>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CategoryPage