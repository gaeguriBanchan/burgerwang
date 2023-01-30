import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import cartReducer from "./cartReducer";
import userSlice from "./userSlice";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["cart"],
};

export const rootReducer = combineReducers({
  cart: cartReducer.reducer,
  user: userSlice.reducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
