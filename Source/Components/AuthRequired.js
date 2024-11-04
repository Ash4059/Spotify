import { redirect } from "react-router-dom"

const AuthRequired = async (request) => {
    const isLoggedIn = false;
    const pathName = new URL(request.url).pathname || "/";
    if(!isLoggedIn) {
        throw redirect("/login?message=You must be logged in to access this page.&redirectTo="+pathName);
    }
    
}

export default AuthRequired;