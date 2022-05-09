import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'

export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)));
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
})

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
})

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})

export const fetchDepartments= () => (dispatch) => {

    dispatch(departmentsLoading(true));

    return fetch(baseUrl + 'departments')
    .then(response => response.json())
    .then(departments => dispatch(addDepartments(departments)));
}

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
})

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
})

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
})

export const fetchStaffssalary = () => (dispatch) => {

    dispatch(staffssalaryLoading(true));

    return fetch(baseUrl + 'staffsSalary')
    .then(response => response.json())
    .then(staffssalary => dispatch(addStaffssalary(staffssalary)))
}

export const staffssalaryLoading = () => ({
    type: ActionTypes.STAFFSSALARY_LOADING
})

export const staffssalaryFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
})

export const addStaffssalary = (staffssalary) => ({
    type: ActionTypes.ADD_STAFFSSALARY,
    payload: staffssalary
})