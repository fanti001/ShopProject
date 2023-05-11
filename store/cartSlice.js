import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        menuActive: false,
        cartTotal: 0,
        cartShipping: 50,
        cartVAT: 0,
        cartGrandTotal: 0,
        items: [],
    },
    reducers: {
        toggleCart(state) {
            state.menuActive = !state.menuActive;
        },
        addProductToCart(state, action) {
            const currentState = JSON.parse(JSON.stringify(state));
            const { payload } = action;

            const finded = currentState.items.findIndex((item) => {
                return item.title == payload.title;
            })

            if (finded >= 0) {


                state.items[finded] = { ...action.payload, pcs: state.items[finded].pcs + 1 };

            } else {
                return state = {
                    ...state,
                    items: [...state.items, payload]
                }
            }

        },
        vatCounter(state) {
            return {
                ...state,
                cartVAT: (state.cartTotal * 0.23).toFixed(2)
            }
        },
        totalCounter(state) {
            const currentState = JSON.parse(JSON.stringify(state));
            const totalPrice = currentState.items.reduce((prev, next) => {
                return prev + next.price
            }, state.cartTotal)
            return {
                ...state,
                cartTotal: parseInt(totalPrice.toFixed(2))
            }
        },
        grandTotalCounter(state) {
            return {
                ...state,
                cartGrandTotal: state.cartTotal + state.cartShipping

            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer;