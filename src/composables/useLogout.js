import { ref } from "vue";
import {auth} from "../firebase/config";
let error=ref(null);
let userSignOut=async()=>{
    try {
        await auth.signOut();
      } catch (err) {
            error.value=err.message;
            console.log(error.value)
      }
}
let useLogout=()=>{
    return {error , userSignOut}
}
export default useLogout;