import { useEffect } from "react";
import { useState } from "react"
import Friend from "./friend";

export default function Friends(){

    const [friend ,setFriend] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then (data => setFriend(data))

    } , [])
    return(
        <div>
            <h1>friends: {friend.length}</h1>
            {
                friend.map(friend => <Friend friend={friend}></Friend>)
            }

        </div>
    )
}