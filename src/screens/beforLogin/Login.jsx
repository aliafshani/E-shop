import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLoginUser from '../../Hooks/useLoginUser';

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { fetchHandler, data } = useLoginUser()


    const userLoginSubmitHandler = (e) => {
        e.preventDefault()
        fetchHandler('https://dummyjson.com/auth/login', username, password)
        console.log(data);


    }


    return (
        <div className='flex justify-center  align-middle'>
            <div className='bg-[#1c0132] flex-col flex justify-center align-middle rounded-lg mt-24 md:w-3/6 w-5/6 '>
                <div className='mx-auto'>
                    <img className='rounded-md' src="./public/logo.png" alt="" />
                </div>
                <div className='flex justify-center align-middle'>
                    <form onSubmit={userLoginSubmitHandler} className='flex flex-col md:w-3/6 w-5/6'>
                        <input placeholder='' onChange={(e) => setUsername(e.target.value)} className='mt-2 bg-fuchsia-300 p-3 rounded-sm outline-none' type="text" />
                        <input placeholder='' onChange={(e) => setPassword(e.target.value)} className='mt-4  bg-fuchsia-300 p-3 rounded-sm outline-none ' type="text" />
                        <button className='bg-[#1c0132] border-solid border-2 text-xl text-violet-200 border-violet-300 rounded-md p-3 mt-4 '>login</button>
                    </form>

                </div>
                <span className='mx-auto mb-28 mt-9'>
                    <Link to={'/E-shop/signup'}>signup</Link>
                </span>
            </div>
        </div>
    )
}
