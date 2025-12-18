// Action Creators 
export const increment = () => { 
  return { 
    type: 'INCREMENT' 
  }; 
}; 
 
export const decrement = () => { 
  return { 
    type: 'DECREMENT' 
  }; 
}; 
 
export const incrementByAmount = (amount) => { 
  return { 
    type: 'INCREMENT_BY_AMOUNT', 
    payload: amount 
  }; 
}; 
 
export const reset = () => { 
  return { 
    type: 'RESET' 
  }; 
};