import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import cartReducer from "./cartReducer";
import addressReducer from "./addressReducer";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["cart", "address"],
};

export const rootReducer = combineReducers({
  cart: cartReducer.reducer,
  address: addressReducer.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
