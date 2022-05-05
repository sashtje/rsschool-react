import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchPhotos } from './ActionCreators';

import { MainState, SetPerPageAction, SetSearchAction } from './types';
import { IPhotosData } from '../../pages/Main/types';

const initialState: MainState = {
  search: '',
  sort: 'relevance',
  cardsPerPage: '20',
  currentPage: '1',
  totalPages: '0',
  cards: [],
  isLoading: false,
  error: '',
};

const loadInitState = () => {
  const searchQuery = JSON.parse(localStorage.getItem('searchbar') as string);

  if (searchQuery) {
    initialState.search = searchQuery.search;
    initialState.sort = searchQuery.sort;
    initialState.cardsPerPage = searchQuery.cardsPerPage;
    initialState.currentPage = searchQuery.currentPage;
    initialState.totalPages = searchQuery.totalPages;
  }
};

loadInitState();

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<SetSearchAction>) {
      const { search, currentPage } = action.payload;

      state.search = search;
      state.currentPage = currentPage;
    },

    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },

    setPerPage(state, action: PayloadAction<SetPerPageAction>) {
      const { cardsPerPage, currentPage } = action.payload;

      state.cardsPerPage = cardsPerPage;
      state.currentPage = currentPage;
    },

    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },

    clearCards(state) {
      state.cards = [];
    },
  },
  extraReducers: {
    [fetchPhotos.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchPhotos.fulfilled.type]: (state, action: PayloadAction<IPhotosData>) => {
      const { data, totalPages } = action.payload;

      state.isLoading = false;
      state.error = '';
      state.cards = data;
      state.totalPages = totalPages;
    },

    [fetchPhotos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setSearch, setSort, setPerPage, setCurrentPage, clearCards } = mainSlice.actions;
export default mainSlice.reducer;
