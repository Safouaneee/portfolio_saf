import { useDispatch, useSelector } from "react-redux";
import { add,sub,mul,div } from "./action";
import { useState } from "react";

const App = () => {

  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");

  const result = useSelector(state => state.result);
  const dispatch = useDispatch();

  const num1 = Number(n1);
  const num2 = Number(n2);

  return (
    <div style={{ padding: "20px" }}>
      

      <input 
        type="number"
        placeholder="n1"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      />

      <br/><br/>

      <input 
        type="number"
        placeholder="n2"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      />

      <br/><br/>

      <button className="btn btn-dark m-2" onClick={() => dispatch(add(num1, num2))}>+</button>
      <button className="btn btn-dark m-2"  onClick={() => dispatch(sub(num1, num2))}>-</button>
      <button className="btn btn-dark m-2"  onClick={() => dispatch(mul(num1, num2))}>*</button>
      <button className="btn btn-dark m-2"  onClick={() => dispatch(div(num1, num2))}>/</button>

      <h3>Résultat : {result}</h3>
    </div>
  );
}

export default App;
