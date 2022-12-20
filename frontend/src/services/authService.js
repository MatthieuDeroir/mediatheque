import axios from "axios";

class AuthService {
     login(username, password) {
         return axios.post("http://207.154.196.96:4000/auth/signin", {
                username,
                password
            }).then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
               return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, password, role) {
         let roles = [];
         roles[0] = role;
        return axios.post("http://207.154.196.96:4000/auth/signup", {
            username,
            password,
            roles
        });
    }

    updateUser(_id, role){
        let roles = [];
        console.log(_id)
        roles[0] = role;
        return axios.put("http://207.154.196.96:4000/user/" + _id, {
            roles
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();