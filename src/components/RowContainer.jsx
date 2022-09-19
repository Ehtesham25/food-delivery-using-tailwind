import React, { useContext, useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'


import notFound from "../assets/NotFound.svg"
import { UserContext } from '../context/StateProvider'
import { userTypes } from '../context/actionTypes'
import { freshFruites } from '../utils/data'


const RowContainer = ({ flag, scroll }) => {
    const { dispatch } = useContext(UserContext)
    let data = true;
    const ref = useRef()
    useEffect(() => {
        ref.current.scrollLeft += scroll;
    }, [scroll])

    const handleAddtoCart = (item) => {
        dispatch({
            type: userTypes.SET_ADD_TO_CART,
            payload: item
        })
    }
    return (
        <div ref={ref} className={`w-full overflow-y-hidden   flex items-center scroll-smooth justify-arround gap-4 px-3  ${flag ? "overflow-x-scroll scrollbar-none my-10 ml-0" : "overflow-x-hidden flex-wrap  "}`}>
            {data && data ? freshFruites.map((item, index) => (
                <div onClick={() => handleAddtoCart(item)} key={index} className='w-300 min-w-[270px] md:min-w-[300px] h-56 my-8 md:w-250 bg-slate-200 rounded-lg backdrop-blur-lg drop-shadow-lg     '>
                    <div className="flex items-center justify-between">
                        <motion.img whileHover={{ scale: 1.1 }} src={item.img} className="w-48 h-44 drop-shadow-2xl object-contain -mt-10  " />
                        <motion.div whileTap={{ scale: 0.7 }} className='w-8 h-8 cursor-pointer bg-red-600 rounded-full flex items-center justify-center mx-4'>
                            <MdShoppingBasket className='text-white' />
                        </motion.div>
                    </div>
                    <div className='flex items-end justify-end flex-col mx-4'>
                        <p className='font-semibold text-textColor'>{item.name}</p>
                        <p>{item.calories} Calories</p>
                        <p className='font-semibold text-headingColor'><span className='text-red-600'>$ </span>{item.price}</p>
                    </div>
                </div>
            )) :
                <div className='w-full flex flex-col justify-center items-center'>
                    <img src={notFound} alt="Not Found" className='h-40 object-contain' />
                    <p className='text-center font-semibold pt-4 text-textColor'>Data Not Found!</p>
                </div>}
        </div>
    )
}

export default RowContainer