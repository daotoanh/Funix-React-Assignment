import * as ActionTypes from './ActionTypes'

export const Staffssalary = (state = { isLoading: true,
    errMess: null,
    staffssalary:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFSSALARY:
            return {...state, isLoading: false, errMess: null, staffssalary: action.payload};

        case ActionTypes.STAFFSSALARY_LOADING:
            return {...state, isLoading: true, errMess: null, staffssalary: []}

        case ActionTypes.STAFFSSALARY_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
            
    }
    
};