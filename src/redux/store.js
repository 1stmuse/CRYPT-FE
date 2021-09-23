import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { userReducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

// export default () => {
const store = createStore(persistedReducer);
const persistor = persistStore(store);
//   return { store, persistor };
// };

export { store, persistor };
