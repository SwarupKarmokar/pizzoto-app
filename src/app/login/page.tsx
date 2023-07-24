import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
            {/* Box  */}
            <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-[50%]">
                {/* IMAGE CONTAINER  */}
                <div className="relative h-1/3 w-full md:h-full md:w-1/2">
                    <Image src={'/loginBg.png'} alt='signin-img' fill className='object-cover' />
                </div>
                {/* FORM CONTAINER  */}
                <div className="p-10 flex flex-col gap-8 md:w-1/2">
                    <h1 className='font-bold text-xl lg:text-3xl'>Welcome</h1>
                    <p className="">Login to access</p>
                    <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
                        <Image src={"/google.png"} alt='' width={20} height={20} className='object-cover' />

                        <span>SignIn with Google</span>
                    </button>

                    <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
                        <Image src={"/facebook.png"} alt='' width={20} height={20} className='object-contain' />

                        <span>SignIn with Facebook</span>
                    </button>

                    <p className='text-sm'>Have a problem? <Link href={'/contact'} className='underline'>Contact Us</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage