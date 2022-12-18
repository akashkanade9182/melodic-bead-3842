import {  GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"
// import * as types  from './actionTypes'
export const getDataRequest = ()=>
{
    return {
        type:GET_DATA_REQUEST
    }
}
export const getDataSuccess = (payload)=>
{
    return {
        type:GET_DATA_SUCCESS,
        payload
    }
}
export const getDataFailure = ()=>
{
    return {
        type:GET_DATA_FAILURE
    }
}




