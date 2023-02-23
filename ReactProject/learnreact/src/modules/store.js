import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "../redux/counterSlice";

export default configureStore({
    reducer: {
        counter:counterSlice,
    },
});
