const { createStoreHook } = require("react-redux");
const { persistReducer, persistStore } = require("redux-persist");
const { default: storage } = require("redux-persist/lib/storage");
const { default: expenseReducer } = require("../reducers/expenseReducer");

const persistConfig = {
    key: 'root',
    storage
};

const persist = persistReducer(persistConfig, expenseReducer); 
const store = createStoreHook(persist);
persistStore(store);