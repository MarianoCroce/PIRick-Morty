import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension"
import rootReducer from "./reducer"
import thunk from "redux-thunk";
// import thunkMiddleware  from "redux-thunk";






// const composeEnhacer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
// const store = createStore(
//     rootReducer,
//     composeEnhacer(applyMiddleware(thunkMiddleware)))

    export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));