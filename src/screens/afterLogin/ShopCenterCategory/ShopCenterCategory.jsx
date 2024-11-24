import React from 'react';
import './ShopCenterCategory.css'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../../component/Navbar/Navbar';
import ProductCards from '../../../component/ProductCards';

export default function ShopCenterCategory() {
    const { category } = useParams()
    return (
        <Navbar name={category}>
            <div className='w-full flex flex-wrap justify-start'>
                <ProductCards productData={'ll'} />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
            </div>
        </Navbar>
    )
}
