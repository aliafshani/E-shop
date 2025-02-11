import React from 'react'
import './ShopCenter.css'
import Navbar from '../../../component/Navbar/Navbar'
import CategoryCard from '../../../component/CategoryCard/CategoryCard'

import {useGetFetch} from "../../../Hooks/useFetch.jsx";


export default function ShopCenter() {

    const {data, isPending, error} = useGetFetch("https://fakestoreapi.com/products/categories")
    console.log(error)
    return (
        <>
            <Navbar name={"Shop center"}>
                <div className='w-full flex flex-col md:flex-row flex-wrap  '>
                    {
                        <div>
                            {isPending && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            {data && <div className={"flex flex-wrap justify-center"}>
                                {data.map((item) =>
                                    (<CategoryCard key={item.id} name={item}/>)
                                )}
                            </div>}


                        </div>

                    }
                </div>
            </Navbar>
        </>
    )
}
