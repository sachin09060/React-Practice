import { createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, counterReducer);
export const store = createStore(persistedReducer);
persistStore(store);
