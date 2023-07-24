"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
]

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);

    const user = false;

    return (
        <div>
            {
                !open ? (
                    <Image src={'/open.png'} alt='menu-list' width={20} height={20} onClick={() => setOpen(true)} />
                ) : (

                    <Image src={'/close.png'} alt='menu-list' width={15} height={15} onClick={() => setOpen(false)} />
                )
            }

            {
                open &&
                <div className='bg-red-500 text-white absolute left-0 top-16 w-full h-[calc(100vh-4rem)] flex items-center justify-center flex-col gap-6 text-xl z-10'>
                    {
                        links.map(link => (
                            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>{link.title}</Link>
                        ))

                    }
                    {
                        !user ? (
                            <Link href={'/login'} onClick={() => setOpen(false)}>Login</Link>
                        ) : (
                            <Link href={'/orders'} onClick={() => setOpen(false)}>Orders</Link>
                        )
                    }

                    <Link href={'/cart'} onClick={() => setOpen(false)}><CartIcon /></Link>
                </div>

            }


        </div>
    )
}

export default Menu