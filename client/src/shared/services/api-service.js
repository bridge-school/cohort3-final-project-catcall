import axios from 'axios';

class ApiService {
    constructor() {
        return axios.create({
            baseURL: `${process.env.REACT_APP_API_HOST}/api`,
            timeout: 1000,
        });
    }
}

export default (new ApiService());
