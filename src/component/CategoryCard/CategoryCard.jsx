import React from 'react'
import './CategoryCard.css'
import { Link } from 'react-router-dom'

export default function CategoryCard({ name, icon }) {
    return (
        <div className=' my-5  w-full md:w-2/4 '>
            <Link to={`${name}`}>
                <div className='border-double  p-4 rounded-lg  flex justify-evenly mx-auto align-middle w-5/6 md:w-3/6 border-2 border-[#60407d]'>
                    <span className='mr-4 text-[#34164c]'>{name}</span>
                    <p className='text-3xl text-[#34164c]'>{icon}</p>
                </div>
            </Link>
        </div>
    )
}
