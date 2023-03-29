import { configureStore } from "@reduxjs/toolkit";
import{Search_input} from '../search'
import Auth from "./pogect/Auth";

const store = configureStore({
    reducer: {
        data : Search_input,
        Auth : Auth
    }
})

export  {store}
