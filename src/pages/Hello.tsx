import React, { useEffect, useState }  from "react";
import { Button } from 'antd'

export default function Hello() {
  const [count, setCount] = useState(0);
 const dom =  <div>
 <h1>h1</h1>
 <h2>h2</h2>
</div>

// console.log(dom);
const click = () =>{
  setCount((c)=>c+1)
}

  return (
    <>
    {/* {dom} */}

    <Button onClick={click}>点击</Button>
    <div><span>数值：</span><span>{count}</span></div>
    </>
    
  )
}