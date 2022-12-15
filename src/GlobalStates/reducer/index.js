import { combineReducers } from "redux";
import brandsData from './reducer'


const allreducer = combineReducers({
    brandsData:brandsData
})

export default allreducer