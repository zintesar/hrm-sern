import axios from "axios";
import { ADD_EMPLOYEE_FAIL, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, EMPLOYEE_LIST_FAIL, EMPLOYEE_LIST_REQUEST, EMPLOYEE_LIST_SUCCESS } from '../constants/employeeConstants'

export const register = (firstName, lastName, email) => async (dispatch) => {

    try {
        dispatch({
            type: ADD_EMPLOYEE_REQUEST
        })

        const config = {
            Headers: {
                'Content_Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/', { firstName, lastName, email }, config)

        dispatch({
            type: ADD_EMPLOYEE_SUCCESS,
            payload: data
        })

    } catch (error) {
        s

        dispatch({
            type: ADD_EMPLOYEE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }

}


export const listEmployees = () => async (dispatch) => {

    try {
        dispatch({ type: EMPLOYEE_LIST_REQUEST })

        const { data } = await axios.get('/api/products')

        dispatch({
            type: EMPLOYEE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {

        dispatch({
            type: EMPLOYEE_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}