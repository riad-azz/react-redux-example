import { configureStore, Store } from "@reduxjs/toolkit";
import todoReducer, { TodoState } from "@/features/todo/todoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // Key for the persisted state
  storage, // Storage engine, e.g., local storage
  // Optionally, you can blacklist or whitelist specific reducers
  // blacklist: ['reducerToExclude'],
  // whitelist: ['reducerToInclude'],
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store: Store<TodoState> = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
