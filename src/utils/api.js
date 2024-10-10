import axios from 'axios';
let token  = sessionStorage.getItem('token')
console.log("tokendddddd",token);
// let token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODYzNjEzLCJpYXQiOjE3Mjc3NzcyMTMsImp0aSI6Ijk0YzY0YWI4YjEwNDQ5ZjNiMzg3NTRhODc1NWM4YTkxIiwidXNlcl9pZCI6NH0.7lgMQxUeCXpAAY9RNxvmeqV7rvdmakdhth_1W3zTtwQ"
export const api = {
    post:(url,data)=>axios.post(url,data,{headers:{Authorization:`Bearer ${token}`}}),
    get:(url,data)=>axios.get(url,{headers:{Authorization:`Bearer ${token}`}})
}

export const authApi = {
    post:(url,data)=>axios.post(url,data),
}