import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: addProductsToCart,
})

export default store;