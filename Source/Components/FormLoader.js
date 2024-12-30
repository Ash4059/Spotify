import { redirect } from "react-router-dom";
import store from "../Utils/Store";

export default function formLoader({ request }) {
  const user = store.getState().user?.user;
  if(user != null){
    return redirect("/account");
  }
  return new URL(request.url).searchParams.get("message");
}
