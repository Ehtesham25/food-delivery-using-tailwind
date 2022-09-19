import React, { useContext, useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { MdShoppingBasket, MdOutlineLogout, MdAdd } from "react-icons/md";
import { motion } from "framer-motion"

import { app } from "../firebase.config"
import { UserContext } from '../context/StateProvider';
import { userTypes } from '../context/actionTypes';
import Logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import { Link } from 'react-router-dom';


const Header = () => {
    const { state: { user, cartItems }, dispatch } = useContext(UserContext)

    const [isMenu, setIsmenu] = useState(false)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const handleLogin = async () => {
        if (!user) {
            const { user: { providerData, accessToken } } = await signInWithPopup(auth, provider)
            dispatch({
                type: userTypes.SET_USER,
                payload: providerData[0]
            })
        }
        else {
            setIsmenu(!isMenu)
        }
    }
    const handleLogout = () => {
        localStorage.clear()
        setIsmenu(false)
    }
    const handleNavigate = () => {
        setIsmenu(false)
    }
    const handleCartShow = () => {
        dispatch({
            type: userTypes.SET_CART_SHOW
        })
    }

    return (
        <header className=' bg-gray-100 fixed z-40  w-full px-10 py-6 flex' >
            {/* for desktop view */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <div className='flex items-center gap-8'>
                    <img src={Logo} alt="logo" className='w-8 cursor-pointer object-cover ' />
                </div>
                <div className='flex items-center justify-center gap-9'>
                    <motion.ul initial={{ opacity: 0, x: 200 }} animate={{
                        opacity: 1, x: 0
                    }} exit={{ opacity: 0, x: 200 }} className='flex  items-center ml-auto gap-3' >
                        {["Home", "Menu", "About"].map((item, index) => (
                            <li key={index} className='cursor-pointer text-base px-4 text-text-color hover:text-blue-400 duration-100 transition-all ease-in-out ' >{item}</li>
                        ))}
                    </motion.ul>
                    <motion.div onClick={handleCartShow} whileTap={{ scale: 0.5 }} className=' relative flex justify-center items-center cursor-pointer'>
                        <MdShoppingBasket size={26} />
                        {cartItems?.length > 0 &&
                            <div className=' flex justify-center items-center absolute -top-3 -right-3 w-6 h-6 rounded-full bg-yellow-600'>
                                <span className='text-white font-medium text-base '>{cartItems?.length}</span>
                            </div>
                        }
                    </motion.div>
                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }} onClick={() => handleLogin()} src={user && user && user ? user?.photoURL : avatar} alt="userProfile" className='w-10 min-h-[40px] min-w-[40px] object-contain drop-shadow-xl cursor-pointer rounded-full ' />
                        {isMenu &&
                            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 0.9 }} exit={{ opacity: 0, scale: 0.6 }} className='absolute w-40 drop-shadow-lg bg-gray-50 top-13 right-0 rounded-lg'>
                                <Link to="/create" className='flex justify-center items-center gap-4 my-3 text-base cursor-pointer hover:text-slate-400 ' > <MdAdd /> New Items</Link>
                                <p onClick={handleLogout} className='flex justify-center items-center gap-4 text-base mb-3 cursor-pointer hover:text-slate-400' > <MdOutlineLogout /> Logout</p>
                            </motion.div>
                        }

                    </div>
                </div>
            </div>
            {/* for mobile view */}
            <div></div>
        </header>
    )
}

export default Header