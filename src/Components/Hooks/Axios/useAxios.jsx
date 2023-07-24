import axios from "axios";


const useAxios = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://collage-task-server-side.vercel.app',
    });
    return [axiosSecure];
};

export default useAxios;