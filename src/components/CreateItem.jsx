import { doc, setDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import {
    MdFastfood,
    MdCloudUpload,
    MdDelete,
    MdFoodBank,
    MdAttachMoney,
} from "react-icons/md";

import { fireStore, storage } from '../firebase.config';
import { categories } from "../utils/data"
import Input from './Input';
import Loading from './Loading';

const CreateItem = () => {
    const [postData, setPostData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [imageAsset, setImageAsset] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);

    const handleUploadImage = (e) => {
        setIsLoading(true)
        const image = e.target.files[0];
        const storageRef = ref(storage, `Images/${Date.now()}-${image.name}`)
        const uploadImage = uploadBytesResumable(storageRef, image)
        uploadImage.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("progresss", progress)
        }, (error) => {
            console.log(error)
            setFields(true)
            setMsg("Error while upload Image Please Try Again!")
            setTimeout(() => {
                setFields(false)
                setIsLoading(false)

            }, 2000);
        }, () => {
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                setImageAsset(url)
                setFields(true)
                setAlertStatus("success")
                setMsg("Image Uploaded Successfully!")
                setTimeout(() => {
                    setFields(false)
                    setIsLoading(false)
                }, 2000);
            })
            console.log("postdata", postData)
        })
    }
    const handleDeleteImage = () => {
        const deleteRef = ref(storage, postData.imageAsset)
        deleteObject(deleteRef).then(() => {
            setPostData({ ...postData, imageAsset: null })
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setPostData({ ...postData, [name]: value })
    }
    const handleSubmit = async () => {
        if (!postData || !imageAsset) return;
        const data = {
            id: `${Date.now()}`,
            imageURL: imageAsset,
            qty: 1,
            postData,

        }
        await setDoc(doc(fireStore, "foodDelivery", `${Date.now()}`), { data, merge: true })
        setFields(true)
        setAlertStatus('success')
        setMsg("Data uploaded successfully")
        setTimeout(() => {
            setFields(false)
        }, 3000);
        setImageAsset(null)

    }
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='flex flex-col w-[90%] md:w-[55%] border border-gray-300 rounded gap-6 p-5'>
                {fields &&
                    <p className={`w-full text-center py-2 rounded capitalize font-semibold space-x-2 ${alertStatus === 'danger' ? 'text-red-200 bg-red-800 ' : ' text-emerald-200 bg-emerald-800'}`}>
                        {msg}
                    </p>}
                <Input handleChange={handleChange} Icon={MdFastfood} placeholder="title" name="title" type="text" />
                <div className='w-full'>
                    <select name='catagory' onChange={handleChange} className='w-full outline-none text-base border-b-2 rounded py-1 bg-white'>
                        <option value="other" disabled selected>select any catagory.</option>
                        {categories && categories.map((item, index) => (
                            <option key={index} value={item.urlParamName} className="font-medium text-headingColor text-base capitalize">{item.name} </option>
                        ))}
                    </select>
                </div>
                <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-250 cursor-pointer rounded-lg">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                            {!imageAsset ? (
                                <>
                                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                            <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                            <p className="text-gray-500 hover:text-gray-700">
                                                Click here to upload
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            name="imageAsset"
                                            accept="image/*"
                                            onChange={handleUploadImage}
                                            className="w-0 h-0"
                                        />
                                    </label>
                                </>
                            ) : (
                                <>
                                    <div className="relative h-full">
                                        <img
                                            src={imageAsset}
                                            alt="uploaded image"
                                            className="w-full h-full  object-contain"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleDeleteImage}
                                            className="absolute bottom-3 -right-10 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                                        >
                                            <MdDelete className=" text-white" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className=' flex flex-col md:flex-row gap-3 '>
                    <Input handleChange={handleChange} Icon={MdFoodBank} placeholder="calories" name="calories" type="number" />
                    <Input handleChange={handleChange} Icon={MdAttachMoney} placeholder="price" name="price" type="number" />

                </div>
                <div className='flex w-full items-center '>
                    <button onClick={handleSubmit} className=' ml-0 md:ml-auto w-full md:w-auto rounded border-none bg-emerald-500 text-white py-2 px-10 hover:bg-emerald-600 duration-100 transition-all ease-in-out text-lg font-semibold'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default CreateItem;
