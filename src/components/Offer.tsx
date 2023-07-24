import Image from 'next/image'
import CountDown from '@/components/CountDown'


const Offer = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
            {/* TEXT CONTAINER  */}
            <div className='flex-1 flex flex-col justify-center items-center gap-8 p-6 md:items-start'>
                <h1 className="text-white text-5xl font-bold xl:text-6xl">
                    Delecious Kochuri and Samosha
                </h1>
                <p className="text-white text-justify xl:text-xl ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est architecto iure necessitatibus neque voluptatibus suscipit atque quos, distinctio inventore?
                </p>
                <CountDown />
                <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
            </div>
            {/* IMAGE CONTAINER  */}
            <div className='flex-1 w-full relative md:h-full'>
                <Image src={'/offerProduct.png'} alt='offer-image' fill className='object-contain' />
            </div>
        </div>
    )
}

export default Offer