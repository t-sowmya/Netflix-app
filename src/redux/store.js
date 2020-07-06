import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer, {}, compose(applyMiddleware())
);

export default store;