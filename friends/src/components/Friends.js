import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const Friends = () => {

    const [ friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
    }

    useEffect(() => {
        getFriends()
    },[])

    return (
        <div>
            Friends
        </div>
    )
}

export default Friends