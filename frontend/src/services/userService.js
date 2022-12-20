import axios from 'axios';
import authHeader from "./authHeader";
const API_URL = 'http://207.154.196.96:4000/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
    getUserBoard() {
        return axios.get(API_URL + 'user');
    }
    getAdminBoard() {
        return axios.get(API_URL + 'admin');
    }
    getSuperuserBoard() {
        return axios.get(API_URL + 'superuser');
    }
}

export default new UserService();