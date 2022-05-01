import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegisterCardItem } from '../../components/RegisterCardItem/types';

interface FormState {
  cards: IRegisterCardItem[];
}

const initialState: FormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<IRegisterCardItem>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;
export default formSlice.reducer;
