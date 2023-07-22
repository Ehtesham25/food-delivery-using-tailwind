import React, { useState } from 'react';
import { MdFastfood } from 'react-icons/md';

import { categories } from "../utils/data";
import Text from './Text';
import RowContainer from "./RowContainer"

const Dishes = () => {
    const [selectedItem, setSelectedItem] = useState('chicken')

    const handleSelect = (item) => {
        setSelectedItem(item)
    }

    return (
        <section className='w-full py-6' id='menu'>
            <Text text="Our hot and spicy dishes." />
            <div className='flex items-center gap-5 justify-center my-7 py-8 overflow-x-scroll scrollbar-none'>
                {categories && categories.map((item, index) => (
                    <div key={index} onClick={() => handleSelect(item.urlParamName)} className={` ${item.urlParamName === selectedItem ? "bg-cartNumBg" : "bg-card"}  group flex h-28 min-win-[94px] w-24 flex-col items-center justify-center  rounded-lg  drop-shadow-lg hover:bg-cartNumBg  cursor-pointer transition-all ease-in-out duration-200`}>
                        <div className={`${item.urlParamName === selectedItem ? "bg-card" : "bg-cartNumBg"} w-10 h-10  rounded-full flex justify-center items-center group-hover:bg-white `}>
                            <MdFastfood className={` ${item.urlParamName !== selectedItem ? "text-card" : "text-headingColor"}  group-hover:text-textColor text-lg`} />
                        </div>
                        <p className={`${item.urlParamName === selectedItem ? "text-white" : "text-textColor"} group-hover:text-white`}>{item.name}</p>
                    </div>
                ))}
            </div>
            <div className='w-full flex items-center '>

                <RowContainer flag={false} />
            </div>
        </section>
    )
}

export default Dishes
