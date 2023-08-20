import { requestAuth } from "./RequestAuth"
import { requestToken } from "./RequestToken";

export const oAuth = async (userName,password) => {

    requestAuth(userName,password);

}

export const getProfile = async () => {

    const accessToken = localStorage.getItem('access_token');

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
        Authorization: 'Bearer ' + accessToken
        }
    });

    const data = await response.json();
    return data;

}