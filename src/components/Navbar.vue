<template>
  <nav v-if="user">
    <div>
      <p>{{ user.displayName }}</p>
      <p class="email">Loggined as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import getUser from "../composables/getUser";
import useLogout from "../composables/useLogout";

export default {
  setup() {
    let { error, userSignOut } = useLogout();

    let logout = async () => {
      await userSignOut();
      console.log("user logged out");
    };

    let { user } = getUser();
    return { logout, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>