import { POST_LOAD, ADD_TO_ORDER, REMOVE_ORDER } from "../redux/action/actionTypes"
import { IPost } from './IPostLoaderPage'

export interface IOrder { 
    item: IPost,
    count: number
}

export interface IState {
    posts: any,
    order: IOrder[]
}

export interface IPostLoad {
    type: typeof POST_LOAD,
    payload: any
}

export interface IAddOrder {
    type: typeof ADD_TO_ORDER,
    payload: IOrder
}

export interface IRemoveOrder {
    type: typeof REMOVE_ORDER,
    payload: string
}