import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { MdWest } from "react-icons/md"
import { RiRefreshFill } from "react-icons/ri"
import { BiMinus, BiPlus } from "react-icons/bi";

import { UserContext } from '../context/StateProvider';
import { userTypes } from '../context/actionTypes';

const Cart = () => {
    const { state: { cartItems }, dispatch } = useContext(UserContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const [carts, setCarts] = useState(cartItems)

    useEffect(() => {
        const price = cartItems.reduce((accumlator, item) => {
            return accumlator + item.price * item.qty
        }, 0)
        setTotalPrice(price)
    }, [cartItems])

    const handleCartShow = () => {
        dispatch({
            type: userTypes.SET_CART_SHOW
        })
    }

    const handleQty = (item) => {
        const deepCopy = [...carts]
        const findIndex = deepCopy.findIndex((singleItem) => singleItem.id == item.id)
        let updateItem = deepCopy.find((singleItem) => singleItem.id === item.id)
        updateItem = { ...updateItem, qty: updateItem.qty++ }
        deepCopy[findIndex] = updateItem
        dispatch({
            type: userTypes.SET_QTY,
            payload: deepCopy
        })
    }
    const handleClearCart = () => {
        dispatch({
            type: userTypes.SET_CLEAR_CART
        })
    }
    const handleCheckout = () => {
        console.log("order is", cartItems)
    }
    return (
        <motion.div initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 300 }} className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
            <div className='w-full  flex justify-between p-5 items-center'>
                <MdWest onClick={handleCartShow} className='text-xl text-textColor cursor-pointer hover:drop-shadow-md' />
                <p className='text-xl font-semibold text-textColor'>Cart</p>
                <div onClick={handleClearCart} className='flex bg-gray-100 px-2 p-1 hover:shadow-md rounded-md cursor-pointer  items-center'>
                    Clear <RiRefreshFill />
                </div>
            </div>
            <div className='w-full bg-cartBg rounded-t-[1rem] flex flex-col h-full ' >
                <div className='w-full h-340 md:h-42 gap-3 px-2 py-12 overflow-y-scroll scrollbar-none flex flex-col '>
                    {cartItems && cartItems.length > 0 ?
                        cartItems.map((item, index) => (
                            <div key={index} className='w-full px-2 p-1 rounded-lg bg-cartItem flex items-center gap-2 '>
                                <img className='h-24 rounded-full max-w-[60px] -mt-6 object-contain' src={item.img} />
                                <div className='flex flex-col justify-center'>
                                    <p className='text-gray-50 text-base'>{item.name}</p>
                                    <p className='text-sm font-semibold text-gray-300 block'>$ {(parseFloat(item.price) * item.qty).toFixed(2)}</p>
                                </div>
                                <div className='flex items-center justify-around mr-3 gap-3'>
                                    <BiMinus className=' cursor-pointer text-lg text-gray-50' />
                                    <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 text-center '>{item.qty}</p>
                                    <BiPlus onClick={() => handleQty(item)} className=' cursor-pointer text-lg text-gray-50' />
                                </div>
                            </div>
                        )) : <div className='flex mx-6 gap-3 h-screen flex-col justify-center items-center'>
                            <p className='font-semibold capitalize text-lg text-gray-400 drop-shadow-2xl shadow-2xl '>cart is empty</p>
                            <div className='w-full h-[.3px] bg-gray-500 rounded-xl'></div>
                        </div>
                    }
                </div>
                {cartItems.length > 0 &&
                    <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] gap-1 flex flex-col px-7 pt-4'>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-400 text-lg'>Sub Total:</p>
                            <p className='text-gray-400 text-lg'>$ {totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-400 text-lg'>Delivery:</p>
                            <p className='text-gray-400 text-lg'>$ 1.39</p>
                        </div>
                        <div className='border-b rounded-md mt-10 mb-5 bg-gray-600'></div>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-200 font-semibold text-xl'>Total:</p>
                            <p className='text-gray-200 font-semibold text-xl'>$ {(totalPrice + 1.39).toFixed(2)}</p>
                        </div>
                        <button onClick={handleCheckout} className='rounded-2xl font-semibold text-textColor text-center p-3 text-lg bg-orange-500 hover:drop-shadow-2xl hover:text-white my-4 '>Check Out</button>
                    </div>
                }
            </div>
        </motion.div>
    )
}
export default Cart
