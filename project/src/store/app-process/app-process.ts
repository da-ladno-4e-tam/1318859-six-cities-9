import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  error: '',
  authUser: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export const {setError, setAuthUser} = appProcess.actions;

