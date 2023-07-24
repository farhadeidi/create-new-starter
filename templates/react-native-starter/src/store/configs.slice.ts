import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const configsSlice = createSlice({
  name: 'configs',
  initialState: {
    name: '' as string,
    language: 'en' as string,
  },

  reducers: {
    mutateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    mutateLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const selector = (state: StoreProps) => state.configs;
export const { mutateName, mutateLanguage } = configsSlice.actions;
export default configsSlice.reducer;
