import { useState } from "react"

function Password() {
    const [pass, setpass] = useState("")
    const [cond, setcond] = useState("")

    function changepass(e) {
        setpass(e.target.value)
        if (pass.length < 4) {
            setcond("le Password peut avoir au moin 4 cartere")

        }
        else {
            setcond("")
        }
    }
    return (
        <div className=" mt-5">
            <label>Entrer password</label>
            <input onChange={(e) => changepass(e)} value={pass} type="text" />
            <p>{cond}</p>

        </div>
    )
}
export default Password