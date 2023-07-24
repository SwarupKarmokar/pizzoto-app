import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';

const Navbar = () => {
    const user = false;

    return (
        <div className='h-10 text-red-500 flex items-center justify-between p-4 border-b-2 border-b-red-500 lg:px-20 xl:px-40'>
            <div className='text-xl font-bold flex gap-4'>
                <Link href={'/'}>PizZoto</Link>
            </div>
            <div className='hidden md:flex gap-4 items-center'>
                <Link href={'/'}>Home</Link>
                <Link href={'/menu'}>Menu</Link>
                <Link href={'/contact'}>Contact</Link>
                {
                    !user ? <Link href={'/login'}>Login</Link> : <Link href={'/orders'}>Orders</Link>
                }
                <CartIcon />
            </div>
            <div className='md:hidden'>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar