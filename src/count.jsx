import { useState } from "react"

export default function Countsonka(){
    const [count , setCount] = useState (0);

    const handleCount = ()=>{
        const newCount = count +1 ;
        setCount(newCount)
    }

    const handleCount2 =()=>{
        const countNew = count -1 ;
        setCount(countNew)
    }
    return(
        <div style={{border:'2px solid tomato'}}>
            <h1>count: {count}</h1>
            <button onClick={handleCount}>add</button>
            <button onClick={handleCount2}> reduch</button>
        </div>
    )
}