//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../redux/commonConstant'

export default function(state = {loading: false , datas:''}, action) {
    //console.log(action.body)
    let reState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case types.REQUEST:
            reState.istrue = false
            reState.loading = true
            break
        case types.SUCCESS:
        // console.log(action)
             if(action.payload.orders == 'orders'){
                    reState.datas = action.body
                }
            reState.loading = true
            // console.log(action.body)
            // reState.datas = action.body
            break
        case types.FAILURE:
            reState.istrue = false
            reState.error = action.error
            // reState.datas = action.body
            reState.loading = false
            break
    }
    // console.log(action.body)
    return reState;
}