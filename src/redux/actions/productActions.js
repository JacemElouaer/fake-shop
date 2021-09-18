import {ActionTypes} from  "../contants/action-types";  
export const set_products  = ( payload) => {
    return  {
        type : ActionTypes.SET_PRODUCTS, 
        payload
    }
} 
export const selected_product = (payload) => {

    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload
    }
}
export const removeselected_product = (payload) => {

    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}