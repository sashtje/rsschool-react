import { createSlice } from '@reduxjs/toolkit';

import { IData } from '../../pages/Main/types';

interface MainState {
  search: string;
  sort: string;
  cardsPerPage: string;
  currentPage: string;
  totalPages: string;
  cards: IData[];
  isLoading: boolean;
  error: string;
}

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
  reducers: {},
  extraReducers: {},
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
