import { ADD_TO_ORDER, POST_LOAD, REMOVE_ORDER } from "../action/actionTypes"
import { IOrder, IState } from '../../interfaces/IRedux'
import { ActionType } from "../../types/ReduxTypes"

export const initialState = {
    posts: [],
    order: []
}

export const postReducer = (state: IState = initialState, action: ActionType) => {
    switch(action.type) {
        case POST_LOAD:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_TO_ORDER:
            return {
                ...state,
                order: [...state.order, action.payload]
            }
        case REMOVE_ORDER:
            return {
                ...state,
                order: state.order.filter((elem: IOrder) => elem.item._id !== action.payload)
            }
        default: 
            return {...state}
    }
}