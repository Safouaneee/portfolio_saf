import { configureStore } from "@reduxjs/toolkit"
import sliceProduit from "./sliceStore"
const store_pr = configureStore(
    {
        reducer:{
            produits:sliceProduit
        }
    }
)
export default store_pr