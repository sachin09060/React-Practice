import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expenseReducer from '../reducers/expenseReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, expenseReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
