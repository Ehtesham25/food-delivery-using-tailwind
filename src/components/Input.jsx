import React from 'react'

const Input = ({ handleChange, Icon, placeholder, type, name }) => {
    return (
        <div className='flex items-center  border-b border-gray-300 justify-center gap-3  '>
            <Icon className='text-2xl border-gray-700' />
            <input name={name} onChange={handleChange} type={type} placeholder={placeholder} className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor' />
        </div>
    )
}

export default Input