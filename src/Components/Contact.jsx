import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast'
export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

const onSubmit = async (data) => {
    const userinfo = {
        name: data.name,
        email: data.email,
        message: data.message
    }
    try {
        await axios.post("https://getform.io/f/bdrryzjb", userinfo);
        toast.success("Your message has been sent successfully")
    } catch (error) {
        console.log(error);
        toast.error("Failed to send message. Please try again later")
    }
}
  return (
    <div name="Contacts" className='max-w-screen-2xl container px-4 mx-auto md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5">
            <form className=" shadow-2xxl bg-slate-200 w-96 px-8 py-6 rounded-xl" 
            // action='' 
            // method='POST'
            onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl font-bold'> Send Your Message!</h1>
                <div className='flex flex-col mb-4'>
                    <label className='mt-4'>
                        Enter fullName:
                    </label>

                    <input type='text' name='name' 
                    {...register("name", { required: true })}
                    id='name'
                    placeholder='Enter fullName' 
                    className='w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                    {errors.name && <span>This field is required</span>}

                </div>

                <div className='flex flex-col mb-4'>
                    <label className=''>
                        Enter email:
                    </label>
                    <input type='text' name='email' 
                    {...register("email", { required: true })}
                    id='email'
                    placeholder='Enter email' 
                    className='w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                    {errors.email && <span>This field is required</span>}
                </div>

                <div className='flex flex-col mb-4'>
                    <label className=''>
                        Enter message:
                    </label>
                    <textarea name='message' 
                    type="text"
                    {...register("message", { required: true })}
                    id='message'
                    className='w-full h-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                    {errors.message && <span>This field is required</span>}
                </div>
                <button type='submit' className='bg-black text-white rounded-lg mb-4 px-4 py-3 hover:scale-95 hover:bg-gray-800 duration-200'>
                    Send
                </button>
            </form>
        </div>
    </div>
  )
}
