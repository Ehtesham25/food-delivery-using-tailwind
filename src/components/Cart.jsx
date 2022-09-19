import React from 'react'
import { MdWest } from "react-icons/md"
import { RiRefreshFill } from "react-icons/ri"
import { BiMinus, BiPlus } from "react-icons/bi";
import d4 from "../assets/d4.png"

const Cart = () => {
    return (
        <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
            <div className='w-full  flex justify-between p-5 items-center'>
                <MdWest className='text-xl text-textColor cursor-pointer hover:drop-shadow-md' />
                <p className='text-xl font-semibold text-textColor'>Cart</p>
                <div className='flex bg-gray-100 px-2 p-1 hover:shadow-md rounded-md cursor-pointer  items-center'>
                    Clear <RiRefreshFill />
                </div>
            </div>
            <div className='w-full bg-cartBg rounded-t-[1rem] flex flex-col h-full ' >
                <div className='w-full h-340 md:h-42 gap-3 px-2 py-12 overflow-y-scroll scrollbar-none   flex flex-col '>
                    <div className='w-full px-2 p-1 rounded-lg bg-cartItem flex items-center gap-2 '>
                        <img className='h-24 rounded-full max-w-[60px] -mt-6 object-contain' src={d4} />
                        <div className='flex flex-col justify-center'>
                            <p className='text-gray-50 text-base'>Healthy Ice cream with no sugar</p>
                            <p className='text-sm font-semibold text-gray-300 block'>$ 5.5</p>
                        </div>
                        <div className='flex items-center justify-around mr-3 gap-3'>
                            <BiMinus className=' cursor-pointer text-lg text-gray-50' />
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 text-center '>0</p>
                            <BiPlus className=' cursor-pointer text-lg text-gray-50' />
                        </div>
                    </div>
                </div>
                <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] gap-1 flex flex-col px-7 pt-4'>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Sub Total:</p>
                        <p className='text-gray-400 text-lg'>$ 12.39</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Delivery:</p>
                        <p className='text-gray-400 text-lg'>$ 1.39</p>
                    </div>
                    <div className='border-b rounded-md mt-10 mb-5 bg-gray-600'></div>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-200 font-semibold text-xl'>Total:</p>
                        <p className='text-gray-200 font-semibold text-xl'>$ 20</p>
                    </div>
                    <button className='rounded-2xl font-semibold text-textColor text-center p-3 text-lg bg-orange-500 hover:drop-shadow-2xl hover:text-white my-4 '>Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default Cart