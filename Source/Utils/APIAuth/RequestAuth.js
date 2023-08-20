import { CLIENT_ID, REDIRECT_URI } from "../Constant";
import { generateCodeChallenge, generateRandomString } from "./CodeGenerator";

export const requestAuth = async (username, password) => {

    const codeVerifier = generateRandomString(128);
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const state = generateRandomString(16);
    const scope = password + ' ' + username;

    localStorage.setItem('code_verifier',codeVerifier);

    const args = new URLSearchParams({
        response_type : 'code',
        client_id : CLIENT_ID,
        scope : scope,
        redirect_uri : REDIRECT_URI,
        state : state,
        code_challenge_method : 'S256',
        code_challenge : codeChallenge
    })

    window.location = 'https://accounts.spotify.com/authorize?' + args;
    requestToken();
}