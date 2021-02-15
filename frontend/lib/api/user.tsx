import axios from "axios";
import { SERVER_URL } from "../utils/constants";

const UserAPI = {
    login: async (user, password) => {
        console.log(user, password);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/login', JSON.stringify({ user: { user, password }}),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            } ).then(res => console.log(res));
            return response;
        } catch(error) {
            console.log("Error", error.response);
            return error.response;
        }
    }
}

export default UserAPI;