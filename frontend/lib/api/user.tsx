import axios from "axios";
import { SERVER_URL } from "../utils/constants";

const UserAPI = {
    login: async (user, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/login', JSON.stringify({ user: user, password: password}),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            });
            return response;
        } catch(error) {
            console.log("Error", error.response);
            return error.response;
        }
    },
    userInfo: async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/userInfo', JSON.stringify({data: {user: data.username}}),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer " + encodeURIComponent(data?.token)
                },
            });
            return response;
        } catch (error) {
            return error;
        }   
    },
    getFavContents: async (data, token) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/favContents', JSON.stringify({ data: data }),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Bearer " + encodeURIComponent(token)
                },
            });
            return response
        } catch (error) {
            return error;
        }
    }
}

export default UserAPI;