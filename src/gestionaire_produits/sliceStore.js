import { createSlice } from "@reduxjs/toolkit";

const sliceStore=createSlice(
    {
        name:"store",
        initialState:{
           List:[],
           
        },
        reducers:{
            setList:(state,action)=>{
                state.List=action.payload
            }
        }
    }
)
export const {setList}=sliceStore.actions
export default sliceStore.reducer