<template>
  <div class="container" v-if="showChatRoom">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
  <div class="container" v-else>
    <GroupChatAccess @enterGCroom="enterGCroom"></GroupChatAccess>
  </div>

  <Users></Users>
</template>

<script>
import GroupChatAccess from "../components/GroupChatAccess";
import Users from "../components/Users";
import ChatWindow from "../components/ChatWindow";
import NewChatForm from "../components/NewChatForm";
import { ref, watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  components: {
    GroupChatAccess,
    Users,
    ChatWindow,
    NewChatForm,
    Navbar,
  },
  setup() {
    let showChatRoom = ref(false);
    let { user } = getUser();
    let router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
    function enterGCroom() {
      showChatRoom.value=true;
    }
    return { showChatRoom ,enterGCroom};
  },
};
</script>

<style>
</style>