import Skeleton from '@mui/material/Skeleton';
import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCards({ productData }) {
    return (
        <>
            <div class="relative m-10 flex w-11/12 md:w-3/12 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    {productData ? (<img src={productData} />) : <Skeleton animation={'pulse'} variant="rectangular" width={'100%'} height={'100%'} />}
                    {productData ? <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">OFF 23%</span> : <Skeleton variant='circular' animation={"pulse"} />}

                </a>
                <div class="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl tracking-tight text-slate-900">{productData ? 'Nike Air MX Super 2500 - Red ' : <Skeleton animation={'wave'} />}</h5>
                    </a>
                    <div class="mt-2 mb-5 flex items-center justify-between">
                        {
                            productData ?
                                (<p>
                                    <span class="text-3xl font-bold text-slate-900">449</span>
                                    <span class="text-sm text-slate-900 line-through">699</span>
                                </p>)
                                :
                                <Skeleton animation={'pulse'} width={90} />
                        }

                    </div>
                    {productData
                        ? <Link to={`${productData}`} class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">

                            product deatail</Link>
                        :
                        <Skeleton height={50} />}
                </div>
            </div>
        </>
    )
}
