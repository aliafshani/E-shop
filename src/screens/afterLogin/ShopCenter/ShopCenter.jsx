import React from 'react'
import './ShopCenter.css'
import Navbar from '../../../component/Navbar/Navbar'
import CategoryCard from '../../../component/CategoryCard/CategoryCard'
import { TbShirtSport, TbStretching } from "react-icons/tb";
import { FaDumbbell } from "react-icons/fa6";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { GiGymBag } from "react-icons/gi";


export default function ShopCenter() {
    return (
        <>
            <Navbar name={"Shop center"}>
                <div className='w-full flex flex-col md:flex-row flex-wrap  '>
                    <CategoryCard name={'clothes'} icon={<TbShirtSport />} />
                    <CategoryCard name={'dumbbell'} icon={<FaDumbbell />} />
                    <CategoryCard name={'balls'} icon={<LiaBasketballBallSolid />} />
                    <CategoryCard name={'stretch band'} icon={<TbStretching />} />
                    <CategoryCard name={'bag'} icon={<GiGymBag />} />
                </div>
            </Navbar>
        </>
    )
}
