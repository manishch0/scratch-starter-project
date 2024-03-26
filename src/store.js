import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./components/redux/rootReducer";

const store = createStore(rootReducer);

export default store;