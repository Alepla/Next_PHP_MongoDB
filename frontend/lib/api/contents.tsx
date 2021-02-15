import axios from "axios";
//import { SERVER_URL } from "../utils/constants";

const ContentsAPI = {
    create: async (content) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/add/', JSON.stringify({ content }), {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },
    update: async () => {
        try {

        } catch (error) {
            return error.response;
        }
    },
    delete: async (contentId) => {
        try {
            console.log(contentId);
            const response = await axios.delete('http://127.0.0.1:8000/api/delete/' + contentId, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }
};
  
  export default ContentsAPI;