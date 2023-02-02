import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import cartReducer from "./cartReducer";
<<<<<<< HEAD
import userSlice from "./userSlice";
=======
import addressReducer from "./addressReducer";
>>>>>>> cb70580d61b9d9e2fc532fcbd0dcf282e1edb626

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["cart"],
  whitelist: ["cart", "address"],
};

export const rootReducer = combineReducers({
  cart: cartReducer.reducer,
<<<<<<< HEAD
  user: userSlice.reducer
=======
  address: addressReducer.reducer,
>>>>>>> cb70580d61b9d9e2fc532fcbd0dcf282e1edb626
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
