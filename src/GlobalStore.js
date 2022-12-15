import { createStore } from "redux"
import allreducer from "./GlobalStates/reducer"

const GlobalStore = createStore(allreducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



export default GlobalStore