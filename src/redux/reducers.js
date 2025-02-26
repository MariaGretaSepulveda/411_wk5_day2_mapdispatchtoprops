import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value]
        default:
            return state
    }
    return state
}

export default combineReducers({ user, cars })