<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="msg in formattedDBmessages" :key="msg.id">
        <span class="created_at">{{ msg.created_at}}</span>
        <span class="name">{{ msg.name }}</span>
        <span class="message">{{ msg.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { db } from "../firebase/config";
import {formatDistanceToNow} from 'date-fns'
import { onUpdated } from '@vue/runtime-core';
export default {
  setup() {
    let DBmessages = ref([]);
    let msgBox =ref(null);
    onUpdated(()=>{
      msgBox.value.scrollTop=msgBox.value.scrollHeight;
    })

    let formattedDBmessages=computed(()=>{
      return DBmessages.value.map((msg)=>{
          let  formatTime=formatDistanceToNow(msg.created_at.toDate());
          return {...msg,created_at:formatTime}
      })
    })
    db.collection("messages").orderBy("created_at").onSnapshot((snap) => {
        let result = [];
        snap.docs.forEach((doc) => {
         
           doc.data().created_at && result.push({ id: doc.id, ...doc.data() });
        });
        DBmessages.value = result;
      });

    return { DBmessages ,formattedDBmessages ,msgBox};
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0px;
}
.created_at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>