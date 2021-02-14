import axios from "axios";
import { SERVER_URL } from "../utils/constants";

const UserAPI = {
    login: async (email, passwd) => {
        console.log(email, passwd);
        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/users/login`,
                JSON.stringify({ user: { email, passwd } }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                }
            );
            return response;
        } catch(error) {
            console.log("Error", error.response);
            return error.response;
        }
    }
}

export default UserAPI;