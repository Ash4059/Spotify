import { CLIENT_ID, REDIRECT_URI } from "../Constant";
import { getProfile } from "./oAuth";

export const requestToken = async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const codeVerifier = localStorage.getItem('code_verifier');
    const body = new URLSearchParams({
        grant_type : 'authorization_code',
        code : code,
        redirect_uri : REDIRECT_URI,
        client_id : CLIENT_ID,
        code_verifier : codeVerifier
    });

    try {
        
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        });
    
        if(!response.ok){
            throw new Error('HTTP status ' + response.status);
        }

        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        const userData = await getProfile();
        console.log(userData);

    } catch (error) {
        console.log("Error :",error);
    }

}