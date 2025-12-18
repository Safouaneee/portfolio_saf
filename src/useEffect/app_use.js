import { useEffect, useState } from "react"

function App_use(){
    const[count,setcount]=useState(0)
    const [discount,setdiscount]=useState(0)

    function like(){
          setcount(c=>c+1)
    }

    useEffect(function(){
        setdiscount(d=>d-1)

    })// kaytsna 7ta itafficha lcomponant f index.js y3ni react i9ra componant (wa5a maykon fdak lcompant walo ) 
     useEffect(function(){
        setdiscount(d=>d-1)

    },[])//  kaytsna 7ta itafficha lcomponant f index.js y3ni react i9ra componant  (wa5a maykon fdak lcompant walo )   (wlkin rir mra wahda)
    useEffect(function(){
        setdiscount(d=>d-1)

    },[count])//  kaytsna 7ta itafficha lcomponant f index.js (wa5a maykon fdak lcompant walo )  otbadal la valeur dial count


    return(
        <div>
            <h3>likes : {count}</h3>
            <button onClick={like}>Like</button>
            <h3>dislike :{discount}</h3>
        </div>
    )

}export default App_use