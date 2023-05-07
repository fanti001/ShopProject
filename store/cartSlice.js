import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
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
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer;