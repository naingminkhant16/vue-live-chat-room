<template>
  <div v-for="user in data" :key="user.id">
    <h3>{{ user.name }}</h3>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import { auth, db } from "../firebase/config";
export default {
  setup() {
    let data = ref([]);
    let names = ref([]);

    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        snap.docs.forEach((doc) => {
          data.value.push({ ...doc.data(), id: doc.id });
        });

        data.value.forEach((datum) => {
          names.value.push(datum.name);
        });

        // data.value = names.value.filter((name, index, array) => {
        //   return array.indexOf(name) == index;
        // });
      });

    return { data };
  },
};
</script>

<style>
</style>