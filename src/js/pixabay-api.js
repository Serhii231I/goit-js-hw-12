import axios from "axios";

export async function serverRequest(url, params) {
    const MY_API_KEY = "46875254-682524027d328dbaad660da8e";
    try {
        const { data } = await axios(url, {
            params: {
                key: MY_API_KEY,
                ...params,
            },
        });
        return data;
    }
    catch (error) {
        throw error;
     }
    
}