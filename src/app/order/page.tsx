import React from 'react'

const OrderPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40'>
            <table className='w-full border-separate border-spacing-3'>
                <thead>
                    <tr className='text-left'>
                        <th className='hidden md:block'>Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className='hidden md:block'>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm md:text-base odd:bg-gray-100 bg-red-50'>
                        <td className='hidden md:block py-5 px-1'>398749247973</td>
                        <td className='py-5 px-1'>23/04/23</td>
                        <td className='py-5 px-1'>20.45</td>
                        <td className='hidden md:block py-5 px-1'>Chizz bust pizza</td>
                        <td className='py-5 px-1'>On the way (approx. 20min)</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-5 px-1'>398749247973</td>
                        <td className='py-5 px-1'>23/04/23</td>
                        <td className='py-5 px-1'>20.45</td>
                        <td className='hidden md:block py-5 px-1'>Chizz bust pizza</td>
                        <td className='py-5 px-1'>On the way (approx. 20min)</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-5 px-1'>398749247973</td>
                        <td className='py-5 px-1'>23/04/23</td>
                        <td className='py-5 px-1'>20.45</td>
                        <td className='hidden md:block py-5 px-1'>Chizz bust pizza</td>
                        <td className='py-5 px-1'>On the way (approx. 20min)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderPage