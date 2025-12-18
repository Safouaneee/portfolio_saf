import { configureStore } from "@reduxjs/toolkit";

const inisialeState={
    nomProduit:"",
    Quantite:"",

}
function reduxstore(state=inisialeState,action){
    switch(action.type){
        case "name":
            return {...state,nomProduit:action.payload}
            
         case "Quantite":
            return {...state,Quantite:action.payload}

        default :
        return state
            
    }
}
 const store =configureStore({reducer:reduxstore})
export default store