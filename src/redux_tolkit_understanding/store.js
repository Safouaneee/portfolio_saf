import { configureStore } from "@reduxjs/toolkit"
import ReducerStore from "./sliceRedux"

const store=configureStore(
    {
        reducer:{notes:ReducerStore}
    }
)
export default store