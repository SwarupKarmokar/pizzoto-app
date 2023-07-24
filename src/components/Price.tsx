"use client"

import { useEffect, useState } from "react"

type Props = {
    id: number,
    price: number,
    options?: { title: string, additionalPrice: number }[]
}

const Price = ({ id, price, options }: Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTotal(quantity * (
            options ? price + options[selected].additionalPrice : price
        ))
    }, [quantity, selected])

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">
                ₹{total.toFixed(2)}
            </h2>

            {/* OPTIONS CONTAINER  */}
            <div className="flex gap-4">
                {
                    options?.map((option, index) => (
                        <button key={option.title} className="min-w-[6rem] py-2 px-3 rounded-md ring-1 ring-red-400" style={{
                            background: selected === index ? "rgb(248 113 113)" : "white",
                            color: selected === index ? "white" : "rgb(248 113 113) "
                        }} onClick={() => setSelected(index)}>
                            {option.title}
                        </button>
                    ))
                }
            </div>

            {/* QUANTITY CONTAINER  */}
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full p-2 ring-1 ring-red-400 rounded-md">
                    <span>Quantity</span>
                    <div className="flex gap-3 items-center">
                        <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}>◀</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(prev => prev + 1)}>▶</button>
                    </div>
                </div>

                {/* CART BUTTON  */}
                <button className="uppercase w-56 bg-red-500 text-white p-2 right-1 ring-red-400 rounded-md">Add to cart</button>
            </div>
        </div>
    )
}

export default Price