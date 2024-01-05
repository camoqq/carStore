import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type cartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
};
type cartItems = {
  items: cartItem[];
};
const initialState: cartItems = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cartName",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (x) => x.id === action.payload.id
      );
      //itemindex will be -1 if item is not found
      if (itemIndex >= 0) {
        state.items[itemIndex].qty++;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex((x) => x.id === action.payload);
      if (state.items[itemIndex].qty === 1) {
        state.items.splice(itemIndex, 1);
        // state.items.pop();
      } else {
        state.items[itemIndex].qty--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
