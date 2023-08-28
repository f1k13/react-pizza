import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Sort = {
  name: string;
  sortProperty: string;
};

interface Ifilter {
  categoryId: number;
  search: string;
  page: number;
  categoriesList: string[];
  sort: Sort;
}

const initialState: Ifilter = {
  categoryId: 0,
  sort: { name: "популярности", sortProperty: "rating" },
  search: "",
  page: 1,
  categoriesList: ["Все"],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortProreprty: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    setSearchItems: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCategoriesItem: (state, action: PayloadAction<string[]>) => {
      state.categoriesList = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSortProreprty,
  setSearchItems,
  setPage,
  setCategoriesItem,
} = filterSlice.actions;

export default filterSlice.reducer;
