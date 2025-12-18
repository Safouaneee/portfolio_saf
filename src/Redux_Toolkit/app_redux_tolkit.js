import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { increment, decrement, incrementByAmount, reset  } from './counterSlice';
 
function App_redux_tolkiit() { 
// Note : state.counter.value car le reducer est sous la clé "counter" 
  
const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch(); 
 
  return ( 
    <div> 
      <h1>Compteur Redux Toolkit</h1> 
       
      <div> 
        {count} 
      </div> 
       
      <div> 

        <button  
          onClick={() => dispatch(decrement())} 
 
        > 
          - Décrémenter 
        </button> 
         
        <button  
          onClick={() => dispatch(increment())} 
           
        > 
          + Incrémenter 
        </button> 
      </div> 
       
      <div> 
        <button  
          onClick={() => dispatch(incrementByAmount(5))} 
          
        > 
          +5 
        </button> 
         
        <button  
          onClick={() => dispatch(incrementByAmount(10))} 
           
        > 
          +10 
        </button> 
      </div> 
       
      <div> 
        <button  
          onClick={() => dispatch(reset())} 
           
        > 
          Réinitialiser 
        </button> 
      </div> 
    </div> 
  ); 
} 
 
 
export default App_redux_tolkiit; 