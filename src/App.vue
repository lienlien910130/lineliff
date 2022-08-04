<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" :profile="profile" />
</template>

<script>
import { onBeforeMount, reactive, ref } from "@vue/runtime-core";
export default {
  setup() {
    var msg = ref("");
    var profile = reactive({});
    onBeforeMount(() => {
      window.liff
        .init({
          liffId: "1657358109-M7NJYBln",
        })
        .then(() => {
          getProfile();
        });
    });
    function getProfile() {
      window.liff.getProfile().then((response) => {
        profile = response;
        msg.value = profile.displayName;
      });
    }
    return { msg: msg, profile: profile };
  },
};
</script>

<!-- <script>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, reactive, onMounted, onBeforeMount, inject } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  onBeforeMount(() => {
    
  }),
};
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
