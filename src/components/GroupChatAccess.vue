<template>
  <form @submit.prevent="showChatRoom">
    <p>Please Enter Group Chat Password</p>
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="_error">{{ _error }}</div>
    <button>Enter Group Chat</button> or
    <span @click="logout">Logout?</span>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogout from "../composables/useLogout";
export default {
  setup(props, context) {
    let password = ref();
    let _error = ref("");
    const GCpassword = "familychat123";
    function showChatRoom() {
      if (password.value === GCpassword) {
        context.emit("enterGCroom");
      } else {
        _error.value = "Incorrect Password! Try again.";
      }
    }

    let { error, userSignOut } = useLogout();

    let logout = async () => {
      await userSignOut();
      console.log("user logged out");
    };

    return { password, showChatRoom, _error, logout };
  },
};
</script>

<style scoped>
form {
  width: 300px;
  margin: 20px auto;
}
input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
button {
  margin: 20px auto;
}
p {
  font-size: 17px;
  text-align: center;
  font-weight: bold;
}
span {
  /* margin-left: 10px; */
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>