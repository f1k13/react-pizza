import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CatalogArgs {
  sort: string;
  order: string;
  category: string;
  searchValue: string;
  page: number;
}

type CatalogItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  category: number;
  rating: number;
};

interface Icatalog {
  items: CatalogItem[];
  status: string;
}

const initialState: Icatalog = {
  items: [],
  status: "",
};

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchItemsStatus",
  async (params: CatalogArgs) => {
    const { sort, order, category, searchValue, page } = params;
    const { data } = await axios.get<CatalogItem>(
      `https://64c41a0b67cfdca3b6609ffc.mockapi.io/items?sortBy=${sort}&order=${order}&page=${page}&limit=4&${category}&search=${searchValue}`
    );
    return data;
  }
);
export const catalogSlice = createSlice({
  name: "Catalog",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<CatalogItem[]>) => {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(fetchCatalog.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems } = catalogSlice.actions;

export default catalogSlice.reducer;
