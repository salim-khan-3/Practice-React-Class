import { useState } from "react";
import "./counter.css";
export const CounterApp = () =>{
    const [count,setCount] = useState(0)

    //todo increment
    const handleIncrementCout =() =>{
        setCount(count+1);
    }
    //todo decrement
    const handleDecrementCount = ()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    return(
        <section className="container">
            <div className="counter_container">
                <h1 style={{textAlign:"center", fontWeight:"bold"}}>Counter App</h1>
                <h2 style={{textAlign:"center"}}>
                    <span>{count}</span>
                </h2>
                <button className="increment" onClick={handleIncrementCout}>Increment</button>
                <button className="decrement" onClick={handleDecrementCount}>Decrement</button>
                <button className="reset" onClick={()=>setCount(0)}>Reset</button>
            </div>
        </section>
    )
}