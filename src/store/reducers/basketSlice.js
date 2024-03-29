import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartItem = localStorage.getItem('cartItem')
  ? JSON.parse(localStorage.getItem('cartItem'))
  : [];
const totalQuantity = localStorage.getItem('totalQuantity')
  ? JSON.parse(localStorage.getItem('totalQuantity'))
  : 0;
const totalAmount = localStorage.getItem('totalAmount')
  ? JSON.parse(localStorage.getItem('totalAmount'))
  : 0;
const initialState = {
  cartItem, //save items in local storage cart
  totalQuantity, // save total quantity of items
  totalAmount, // save total amount of items
};

const setItemToLocal = (cartItem, amount, quantities) => {
  localStorage.setItem(
    'cartItem',
    JSON.stringify(cartItem.map((item) => item))
  );
  localStorage.setItem('totalAmount', JSON.stringify(amount));
  localStorage.setItem('totalQuantity', JSON.stringify(quantities));
};
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const newBasket = action.payload;
      const foundBasket = state.cartItem.find(
        (item) => item.productId === newBasket.productId
      );
      const foundSameProd = state.cartItem.find(
        (item) =>
          item.productId === newBasket.productId &&
          item.sizes === newBasket.sizes &&
          item.color === newBasket.color
      );
      if (!foundBasket) {
        state.totalQuantity++;
        state.cartItem.push(newBasket);
        toast.success(`Successfully added ${newBasket.category} to basket`);
      } else {
        if (!foundSameProd) {
          if (
            (foundBasket.quantity += newBasket.quantity) > foundBasket.stock
          ) {
            toast.error(`Product quantity in stock is not enough`);
          } else {
            state.totalQuantity++;
            state.cartItem.push(newBasket);
            toast.success(`Successfully added ${newBasket.category} to basket`);
          }
        } else {
          if (
            (foundBasket.quantity += newBasket.quantity) > foundBasket.stock
          ) {
            toast.error(`Product quantity in stock is not enough`);
          } else {
            foundBasket.quantity += newBasket.quantity;
            foundBasket.totalPrice += newBasket.totalPrice;
            toast.success(`Successfully added ${newBasket.category} to basket`);
          }
        }
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      setItemToLocal(state.cartItem, state.totalAmount, state.totalQuantity);
    },
    removeItem: (state, action) => {
      const deleteItem = action.payload;
      const foundBasket = state.cartItem.find(
        (item) =>
          item.productId === deleteItem.productId &&
          item.sizes === deleteItem.sizes &&
          item.color === deleteItem.color
      );
      if (!foundBasket) {
        state.totalQuantity--;
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== deleteItem
        );
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      setItemToLocal(state.cartItem, state.totalAmount, state.totalQuantity);
    },
    increment: (state, action) => {
      const basketCurrent = action.payload;
      const foundBasket = state.cartItem.findIndex(
        (item) => item.id === basketCurrent.id
      );
      if (foundBasket >= 0) {
        state.cartItem[foundBasket].quantity = basketCurrent.quantity;
        state.cartItem[foundBasket].totalPrice =
          state.cartItem[foundBasket].price *
          state.cartItem[foundBasket].quantity;
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      setItemToLocal(state.cartItem, state.totalAmount, state.totalQuantity);
    },
    decrement: (state, action) => {
      const basketCurrent = action.payload;
      const foundBasket = state.cartItem.findIndex(
        (item) => item.id === basketCurrent.id
      );
      if (foundBasket >= 0) {
        state.cartItem[foundBasket].quantity = basketCurrent.quantity;
        state.cartItem[foundBasket].totalPrice =
          state.cartItem[foundBasket].price *
          state.cartItem[foundBasket].quantity;
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      setItemToLocal(state.cartItem, state.totalAmount, state.totalQuantity);
    },
    resetLocal: (state, action) => {
      const resetData = action.payload;
      state.cartItem = resetData.cartItem;
      state.totalAmount = resetData.totalAmount;
      state.totalQuantity = resetData.totalQuantity;
    },
  },
});

const { actions, reducer } = basketSlice;

export const { addBasket, removeItem, increment, decrement, resetLocal } =
  actions;

export default reducer;
