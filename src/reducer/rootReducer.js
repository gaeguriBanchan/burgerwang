import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import cartReducer from "./cartReducer";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["cart"],
};

export const rootReducer = combineReducers({
  cart: cartReducer.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
