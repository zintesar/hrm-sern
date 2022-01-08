import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addEmployeeReducer, employeeListReducer } from './reducers/employeeReducers'


const reducer = combineReducers({
    addEmployee: addEmployeeReducer,
    employeeList: employeeListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store