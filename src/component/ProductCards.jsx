
import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCards({ productData }) {
    // const AFTER_OFF = productData.price - (productData.price * (productData.off / 100))

    return (
        <>
            <div className="relative m-10 flex w-11/12 md:w-3/12 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    {productData && (<img src={productData.image} />)}

                    {productData
                        ? productData.off != 0
                            ? <span
                                className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                {productData.off}% OFF
                            </span>
                            : null
                        : null}

                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{productData ? `${productData.title}` : null}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        {
                            productData ?
                                (<p>
                                    {
                                        productData.price
                                            ? (
                                                <>
                                                    {/* <span className="text-3xl font-bold text-slate-900">{AFTER_OFF}</span> */}
                                                    <span className="text-sm text-slate-900 line-through">{productData.price}</span>
                                                </>
                                            ) :
                                            <span className="text-3xl font-bold text-slate-900">{productData.price}</span>
                                    }

                                </p>)
                                :
                                null
                        }

                    </div>
                    {productData
                        ? <Link to={`${productData.id}`} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">

                            product deatail</Link>
                        :
                        null}
                </div>
            </div>
        </>
    )
}
