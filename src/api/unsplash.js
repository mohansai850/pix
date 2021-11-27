import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID XA00cHsMrJB_YTxvpKwm3VFNv3G5dIDN_DEdTmAe-Gk'
    }
})