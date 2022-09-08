import React from 'react'
import iceCream from "../assets/i1.png"

const HomeCard = () => {
    return (

        <div className='w-48 rounded-lg flex flex-col justify-center items-center bg-orange-100 py-4 '>
            <img src={iceCream} alt="ice cream" className='w-16 -mt-10 object-contain' />
            <p className='font-semibold  text-base text-gray-500'>Ice cream</p>
            <p className='font-medium  text-[0.8rem]'>Chocolate & Vanilla</p>
            <p className='text-red-600' >$<span className='text-black'> 5.4</span></p>
        </div>

    )
}

export default HomeCard