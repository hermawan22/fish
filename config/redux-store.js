import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { multiClientMiddleware } from "redux-axios-middleware";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import getEndpoints from "./api";

import rootReducer from "@redux";
import {
  CAN_USE_DOM,
} from "@utils";

const persistConfig = {
  storage,
  key: "efishery",
  whitelist: [],
};

const createStoreWithMiddleware = applyMiddleware(
  thunk.withExtraArgument(),
  multiClientMiddleware(getEndpoints(), {
    returnRejectedPromiseOnError: true,
  })
)(createStore);

const rootReducers = combineReducers({
  ...rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStoreWithMiddleware(
  persistedReducer,
  compose(
    (process.env.APP_ENV !== "production" ||
      process.env.ENABLE_REDUX_DEVTOOLS === "true") &&
      CAN_USE_DOM &&
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({
          name: "Heima",
          trace: true,
        })
      : (f) => f
  )
);

store.__PERSISTOR = persistStore(store);

export default store;
