import React, { useState, useContext } from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Cart from './Cart';
import Dishes from './Dishes';

import Home from './Home'
import RowContainer from './RowContainer';
import Text from './Text';
import { UserContext } from '../context/StateProvider';

const MainContainer = () => {
    const { state: { isCartShow } } = useContext(UserContext)
    const [scroll, setScroll] = useState(0);
    const handleScroll = (index) => {
        if (index === 1) {
            setScroll(prev => prev + 200)
        }
        else {
            setScroll(prev => prev - 200)
        }
    }


    return (
        <div className='w-full h-auto flex flex-col items-center justify-between'>
            <Home />
            <section className='w-full'>
                <div className='w-full flex items-center justify-between'>
                    <Text text="our fresh & healthy fruits." />
                    <div className='flex gap-2 items-center'>
                        {[1, 2].map((item, index) => (
                            <div onClick={() => handleScroll(index)} key={index} className=' md:flex justify-center items-center hidden  w-6 h-6 rounded-md bg-orange-400 cursor-pointer hover:bg-orange-600 transition-all ease-out duration-200'>
                                {item === 1 ? <MdChevronLeft className='text-lg text-white' /> : <MdChevronRight className='text-lg text-white' />}
                            </div>
                        ))}
                    </div>
                </div>
                <RowContainer flag={true} scroll={scroll} />
            </section>
            <Dishes />
            {isCartShow &&
                <Cart />
            }
        </div>
    )
}

export default MainContainer