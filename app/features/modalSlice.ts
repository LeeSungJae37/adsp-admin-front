import { createSlice } from '@reduxjs/toolkit';

export interface ModalShow {
  isModalShow: boolean;
}

const initialState: ModalShow = {
  isModalShow: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalShow = true;
    },
    hideModal: (state) => {
      state.isModalShow = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
