import { redirect } from "react-router-dom";
import { login, signup } from "../Utils/api/Endpoint";
import store from "../Utils/Store";
import { setUser } from "../Utils/userSlice";

const UserFormAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const pathName = new URL(request.url).pathname;
    let userData;
    if(pathName === "/login") {
        userData = await login(data);
    }else{
        userData = await signup(data);
    }
    store.dispatch(setUser(userData));
    return redirect("/");
}
export default UserFormAction