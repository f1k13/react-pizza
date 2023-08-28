import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type basketItem = {
  id: number;
  title: string;
  price: number;
  img: string;
  type: string;
  size: number;
  count: number;
};

interface IbasketSlice {
  totalPrice: number;
  totalCount: number;
  totalItemPrice: number;
  items: basketItem[];
}

const initialState: IbasketSlice = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
  totalItemPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<basketItem>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);

      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    plusItem: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count++;
        state.totalCount++;
        state.totalPrice = state.totalPrice + findItem.price;
      }
    },
    minusItem: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalCount--;
        state.totalPrice = state.totalPrice - findItem.price;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addItems, removeItem, clearItems, minusItem, plusItem } =
  basketSlice.actions;

export default basketSlice.reducer;
