import React, { useEffect } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import CategoryCard from '../../component/CategoryCard/CategoryCard';
import { useSelector, useDispatch } from 'react-redux'
import { getUserFromServer } from '../../Redux/User/UsersSlice';

export default function Home() {
    const users = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserFromServer("https://fakestoreapi.com/users/1"))
    }, [])
    console.log(users);

    return (
        <div className='pr-20'>
            <Navbar />
            {users.status === "loading" && <p>loading...</p>}
            {users.status === "succeeded" && <p>{users.data.name.firstname}</p>}

        </div>
    )
}