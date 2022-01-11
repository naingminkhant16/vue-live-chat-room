<template>
  <form @submit.prevent="handleSubmit">
    <textarea
      placeholder="type here and hit enter to send"
      v-model="message"
      @keypress.enter="handleSubmit"
    >
    </textarea>
    <button class="send">Send</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import { timestamp } from "../firebase/config";
import useCollection from "../composables/useCollection";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();
    let { error, addDoc } = useCollection("messages");

    let handleSubmit = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: timestamp(),
      };
      await addDoc(chat);
      message.value ="";
    };
    return { message, handleSubmit };
  },
};
</script>

<style>
form {
  margin: 10px;
  /* clear: both; */
}
textarea {
  width: 80%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
  
}
.send{
  float: right;
}
@media only screen and (max-width: 865px) {
 textarea{
   width: 70%;
 }
}
</style>