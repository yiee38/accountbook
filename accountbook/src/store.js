
import { configureStore } from '@reduxjs/toolkit'
import dateReducer from "./Redux/dateSlice";
import titleReducer from "./Redux/titleSlice"

export default configureStore({
    reducer: {
        date: dateReducer, 
        title: titleReducer
    }
})