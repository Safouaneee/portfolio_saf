import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { increment, decrement, incrementByAmount, reset  } from './actions';
 
function App_red_classique() { 
  const count = useSelector((state) => state.value); //recuperer les données 
  const dispatch = useDispatch(); // creation d’un dispatcher 
 
  return ( 
    <div> 
      <h1>Compteur Redux</h1> 
       
      <div> 
        {count} 
      </div> 
       
      <div> 
        <button  
          onClick={() => dispatch(decrement())}> 
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
 
export default App_red_classique;