function Result ({bmi,message}){

    return(
        <div>

            <p>Votr BMI :{(bmi!=="" && bmi!==null)?bmi:null}</p>
            <p>Message :{message}</p>
        </div>

    )


}export default Result