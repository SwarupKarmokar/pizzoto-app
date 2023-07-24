"use client"

import Countdown from "react-countdown"
const endingDate = new Date("2023-07-30")

const CountDown = () => {
    return (
        <Countdown date={endingDate} className="font-bold text-green-500 text-5xl" />
    )
}

export default CountDown