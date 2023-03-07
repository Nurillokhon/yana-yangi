import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import{Search_input} from './reducer/search'
=======
import{Search_input} from '../search'
import Auth from "./pogect/Auth";
>>>>>>> 09e778aea671b0ec23bacc9420d5103bad75402d

const store = configureStore({
    reducer: {
        data : Search_input,
        Auth : Auth
    }
})

export {store}
