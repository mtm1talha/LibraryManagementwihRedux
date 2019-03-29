import {combineReducers} from 'redux';
import BookReducer from './bookdetailReducer';
const allReducers=combineReducers({
        books:BookReducer
})

export default allReducers
