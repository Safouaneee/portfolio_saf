function Result ({fahr}){
    
    return(
        <div>

          <input readOnly value={(fahr === "" || fahr === undefined || fahr === null) ? "" : fahr}/>

        </div>
    )

}export default Result