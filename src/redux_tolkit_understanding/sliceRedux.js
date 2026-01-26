import { createSlice } from "@reduxjs/toolkit";

const sliceRedux= createSlice(
    {
        name:"store",
        initialState:{
            moyenne:"",
            grandNote:0
        },
        reducers:{
            setMoyenne:(state,action)=>{
                state.moyenne=action.payload
            },
            setGrandNote:(state,action)=>{
                state.grandNote=action.payload
            }
        }
    }
)
export const {setMoyenne,setGrandNote}=sliceRedux.actions
export default sliceRedux.reducer
