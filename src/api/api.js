import axios from 'axios'
axios.defaults.baseURL = 'http://47.101.213.106:8080/EWMIS/'
// axios.defaults.baseURL = 'http://localhost:8080/EWMIS/'
export const listData = params => {
    // return axios.post('http://localhost:8080/api/tutorials/user', params).then(
    //     res => res.data
    // )
}
export const listData2 = params => {
    return axios.post('/zbdata/listData', params).then(
        res => res.data
    )
}

export const listSingleData = params => {
    return axios.post('/data/listSingleData', params).then(
        res => res.data
    )
}

export const listMoreData = params => {
    return axios.post('/data/listDataByMOre', params).then(
        res => res.data
    )
}

export const listSingleData2 = params => {
    console.log("params:"+params)
    return axios.post('/zbdata/listSingleData', params).then(
        res => res.data
    )
}

export const addData = params => {
    console.log("params:"+params)
    return axios.post('/data/addData', params).then(
        res => res.data
    )
}

export const delData = params => {
    console.log("params:"+params)

    return axios.post('/data/delData', params).then(
        res => res.data
    )
}

export const renewData = params => {
    console.log("params:"+params)
    return axios.post('/data/updateData', params).then(
        res => res.data
    )
}

export const statisticData = params => {
    return axios.post('/data/statisticData', params).then(
        res => res.data
    )
}

export const listUsers = params => {
    return axios.post('/user/listusers', params).then(
        res => res.data
    )
}

export const adduser = params => {
    return axios.post('/user/adduser', params).then(
        res => res.data
    )
}

export const deluser = params => {
    return axios.post('/user/deluser', params).then(
        res => res.data
    )
}

export const updateuser = params => {
    return axios.post('/user/updateuser', params).then(
        res => res.data
    )
}

export const requestLogin = params => {
    return axios.post('/user/login', params).then(
        res => res.data
    )
}

export const exportExcel = params => {
    return axios.post('/data/excel/export', params).then(
        res => res.data
    )
}

export const getRiqi = params => {
    return axios.post('/data/getRiqi', params).then(
        res => res.data
    )
}
