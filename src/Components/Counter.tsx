import { type } from "os";
import React, {useState, useRef, useEffect} from "react";
//counter state
//uses useState function to manage state changes

const Counter=()=>{
	const [counter,setCounter]=useState(0);
//the increment func
 const increment=()=>{
	setCounter(counter+1);
}
//the decrement func
const decrement=()=>{
	setCounter(counter-1);
}
//used to run code on every render, counts every action
useEffect(()=>
{
    console.log("number of clicks: "+ counter)
})
const count = useRef(null);
const onClick=()=>{
    //console.log(count.current.value)
}


//return statement for the counter
return(
<div>
	<div className="ctr">
	{counter}
	</div>
	<button onClick={increment} ref={count}>Increment</button>
    <button onClick={decrement} ref={count}>decrement</button>
</div>
);
}	 
export default Counter;