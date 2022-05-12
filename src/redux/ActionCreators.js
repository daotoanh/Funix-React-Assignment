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


//add newstaff use "POST"

export const postStaff = (name, salaryScale, doB, startDate, department, annualLeave, overTime, salary) => (dispatch) => {

    const newStaff = {
        name: name,
        salaryScale: salaryScale,
        doB: doB,
        startDate: startDate,
        department: department,
        annualLeave: annualLeave,
        overTime: overTime,
        salary: salary
    }

    return fetch(baseUrl + "staffs", {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: { "Content-Type": "application/json" },
    })
        .then(
            (response) => {return response }
        )
        .then((response) => response.json())
        .then((response) => dispatch(AddStaff(response)))
}

//delete staff use "DELETE"

export const deleteStaff = (id) => (dispatch) => {
    fetch(baseUrl + "staffs" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    let err = new Error("Error " + response.status + ": " + response.statusText);
                    throw err;
                }
            },
            (error) => {
                let errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())
        .then(() => dispatch(DeleteStaff(id)), dispatch(fetchStaffs()))
}

//update staff use "PATCH"

export const updateStaff = (updatedStaff) =>  (dispatch) => { 
    fetch(baseUrl + "staffs", {
        method: "PATCH",
        body: JSON.stringify(updatedStaff),
        headers: { "Content-Type": "application/json" },
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                }

                else {
                    let err = new Error("Error " + response.status + ": " + response.statusText);
                    throw err;
                }
            },
            (error) => {
                let errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then((response) => response.json())

        // Hanlde when get response successful
        .then((response) => {
            dispatch(UpdateStaff(response));
            dispatch(fetchStaffs());
        });
}

//action add staff
export const AddStaff = (newStaff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: newStaff
});

//action delete staff
export const DeleteStaff = (id) => ({
    type: ActionTypes.DELETE_STAFFS,
    payload: id
});

//action update staff
export const UpdateStaff = (updatedStaff) => ({
    type: ActionTypes.UPDATE_STAFFS,
    payload: updatedStaff
});

export const fetchDepartments = () => (dispatch) => {

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