import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import basketReducer from "./slices/basketSlice";
import catalogReducer from './slices/catalogSlice'
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    basket: basketReducer,
    catalog: catalogReducer
  },
});

export type RootState = ReturnType <typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const UseAppDispatch = () => useDispatch<AppDispatch>();

  

