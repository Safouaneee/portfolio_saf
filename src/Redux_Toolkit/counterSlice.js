// redux/counterSlice.js 
import { createSlice } from '@reduxjs/toolkit'; 
const counterSlice = createSlice({ 
  name: 'counter', 
  initialState: { 
    value: 0 
  }, 

  reducers: { 
    increment: (state) => { 
      // Redux Toolkit permet de "muter" l'état directement 
      state.value += 1; 
    }, 
    decrement: (state) => { 
      state.value -= 1; 
    }, 
    incrementByAmount: (state, action) => { 
      state.value += action.payload; 
    }, 
    reset: (state) => { 
      state.value = 0; 
    } 
  } 
}); 
 
// Exporter les actions 
export  const { increment, decrement, incrementByAmount, reset } = counterSlice.actions; 
 
// Exporter le reducer 
export default counterSlice.reducer;