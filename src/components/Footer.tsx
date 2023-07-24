import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='text-red-500 h-10 md:h-20 p-4 lg:p-20 xl:p-30 border-t-2 border-red-500 flex items-center justify-between'>
            <Link href={'/'} className='font-bold text-xl'>pizZoto</Link>
            <p>2023-ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer