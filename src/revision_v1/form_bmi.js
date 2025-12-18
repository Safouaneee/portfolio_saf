function Form_bmi({weight,setweight,height,setheight}){

    return(
        <div>

            <input type="number" placeholder="height" value={height} onChange={(e)=>setheight(e.target.value)}/>
            <input type="number" placeholder="weight" value={weight} onChange={(e)=>setweight(e.target.value)}/>
        </div>

    )

}export default Form_bmi