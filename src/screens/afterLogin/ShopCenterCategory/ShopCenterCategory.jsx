import React, {useEffect, useState} from 'react';
import './ShopCenterCategory.css';

import {useParams} from 'react-router-dom';
import Navbar from '../../../component/Navbar/Navbar';
import ProductCards from '../../../component/ProductCards';
import {useGetFetch} from '../../../Hooks/useFetch';

export default function ShopCenterCategory() {
    const {category} = useParams()
    console.log(category)
    const {data, isPending, error} = useGetFetch(`https://fakestoreapi.com/products/category/${category}`)


    return (
        <Navbar name={category}>
            <div className='w-full flex flex-wrap justify-start'>
                {isPending && <div>Loading...</div>}
                {data && data.map((item) => (
                    <ProductCards key={item.id} productData={item}/>
                ))}
                {error && <div>{error}</div>}
            </div>
        </Navbar>
    )
}
