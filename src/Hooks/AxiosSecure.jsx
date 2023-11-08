import axios from "axios";



const axiosSecure = axios.create({
    baseURL: 'https://online-group-study-server.vercel.app',
    withCredentials: true
})

const AxiosSecure = () => {

    return axiosSecure;
    
};

export default AxiosSecure;