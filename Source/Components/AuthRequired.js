import { redirect } from "react-router-dom";
import store from "../Utils/Store";

const AuthRequired = async (request) => {
  const user = store.getState().user.user;
  if (!user) {
    const pathName = new URL(request.request.url).pathname;
    throw redirect(
      `/login?message=You must be logged in to access this page.&redirectTo=${pathName}`
    );
  }
  return null;
};

export default AuthRequired;
