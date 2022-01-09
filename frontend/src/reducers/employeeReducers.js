import { ADD_EMPLOYEE_FAIL, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, EMPLOYEE_LIST_FAIL, EMPLOYEE_LIST_REQUEST, EMPLOYEE_LIST_SUCCESS } from "../constants/employeeConstants"


export const addEmployeeReducer = (state = {}, action) => {

    switch (action.type) {
        case ADD_EMPLOYEE_REQUEST:
            return { loading: true }
        case ADD_EMPLOYEE_SUCCESS:
            return { loading: false, employeeInfo: action.payload }
        case ADD_EMPLOYEE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const employeeListReducer = (state = { employees: [] }, action) => {

    switch (action.type) {
        case EMPLOYEE_LIST_REQUEST:
            return { loading: true, employees: [] }
        case EMPLOYEE_LIST_SUCCESS:
            return { loading: false, employees: action.payload }
        case EMPLOYEE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}