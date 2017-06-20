import * as constants from '../../redux/commonConstant'

export function buy(obj,buy){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'buy',
        method: 'post',
        query: obj,
        buy:buy
    }
}

export function addItem(obj){
    // console.log(111);
    return {
        types: [constants.REQUEST,constants.SUCCESS,constants.FAILURE],
        path: 'addItem',
        method: 'post',
        query: obj
    }
    
}
// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }