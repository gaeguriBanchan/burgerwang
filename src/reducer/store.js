/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './rootReducer';

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
