import request from './request'

//export const xxApi = () => request.get('/xx')
export const RegisterApi = (params) => request.get('/register',params)