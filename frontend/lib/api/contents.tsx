import axios from "axios";
//import { SERVER_URL } from "../utils/constants";

const ContentsAPI = {
    get: async (id) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/content/' + id, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },
    create: async (content, token) => {
        try {
            console.log(content);
            /* const response = await axios.post('http://127.0.0.1:8000/api/add/', JSON.stringify({ content }), {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Token" + encodeURIComponent(token)
                },
            });
            return response; */
        } catch (error) {
            return error.response;
        }
    },
    update: async (content, id, token) => {
        try {
            /* const response = await axios.post('http://127.0.0.1:8000/api/edit/' + id, JSON.stringify({ content }), {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Token" + encodeURIComponent(token)
                },
            });
            return response; */
        } catch (error) {
            return error.response;
        }
    },
    delete: async (contentId, token) => {
        try {
            const response = await axios.delete('http://127.0.0.1:8000/api/delete/' + contentId, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    Authorization: "Token" + encodeURIComponent(token)
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }
};
  
  export default ContentsAPI;