import { useState } from "react"

function Increment() {
    const [val, setVal] = useState(0)

    return (
        <div className="incr">
            <p>{val}</p>
            <button onClick={() => setVal(val + 1)} >Incrementer</button>
            <button onClick={() => setVal(val + 1)}>Decrementer</button>


        </div>
    )

}
// npm install json-server
// json-server --watch db.json --port 4000
export default Increment