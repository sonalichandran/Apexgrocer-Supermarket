import axios from 'axios';
const baseURL="http://localhost:8080/api";
const axiosInstance=axios.create({
    baseURL,

});
axiosInstance.interceptors.request.use(
    (config) => {
     
       
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        
        return config;
    },
    (error) => {
        return Promise.reject("promise reject error");
    }
    
);

const Signup=(username,email,password)=>axiosInstance.post('/auth/register',{username,email,password});
export {axiosInstance, Signup};
