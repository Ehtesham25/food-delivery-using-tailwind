import React from 'react'

import { homeData } from '../utils/data'
import delivery from "../assets/delivery.png"
import heroBg from "../assets/heroBg.png"

const Home = () => {
    return (
        <section id="home" className='grid grid-cols-1 md:grid-cols-2 gap-0 w-full'>
            <div className='flex flex-col items-start gap-3 py-2' >
                <div className='flex items-start gap-3 bg-orange-100 py-1 px-3 rounded-lg'>
                    <p className='text-base text-orange-400 font-semibold '>Bike Delivery</p>
                    <img src={delivery} className="w-7 h-7 rounded-full" alt="delivery" />
                </div>
                <p className='text-[2rem] lg:text-[3rem] font-bold capitalize tracking-wide'>the fatest delivery in <span className='text-[2.4rem] lg:text-[3.5rem] text-orange-400'>Your Town.</span></p>
                <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quas hic omnis eveniet excepturi nesciunt incidunt odio quae. Eligendi, ullam!</p>
                <button className="bg-gradient-to-br from bg-orange-400 to orange-500 rounded-lg p-3 text-center font-medium ">Order Now</button>
            </div>

            <div className='py-2 flex-1 flex items-center relative' >
                <img src={heroBg} alt="Home image" className=' ml-auto h-420 w-full lg:w-auto lg:h-650' />
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-12  py-4 gap-4 flex-wrap'>
                    {homeData &&
                        homeData.map((item) => (
                            <div
                                key={item.id}
                                className="lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            >
                                <img
                                    src={item.imageSrc}
                                    className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                                    alt="I1"
                                />
                                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                                    {item.name}
                                </p>

                                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                    {item.decp}
                                </p>

                                <p className="text-sm font-semibold text-headingColor">
                                    <span className="text-xs text-red-600">$</span> {item.price}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Home