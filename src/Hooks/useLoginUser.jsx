import React, { useState } from 'react'
import { REFRESH_TOKEN_TIME } from '../constants/SiteRoot'
import { useNavigate } from 'react-router-dom';

export default function useLoginUser() {
    const [data, setDate] = useState("");
    const navigate = useNavigate()

    const fetchHandler = async (url, username, pass) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: pass,
                    expiresInMins: REFRESH_TOKEN_TIME, // optional, defaults to 60
                }), // Send username and password in the request body
            });

            setDate(await response.json());

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            navigate("/e-shop/")

        } catch (error) {
            console.log(error);

        }

    }




    return { fetchHandler, data }


}
