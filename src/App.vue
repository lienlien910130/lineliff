<template>
  <RegiestForm :msg="msg" :profile="profile" />
</template>

<script>
import RegiestForm from "./components/RegiestForm.vue";
export default {
  name: "App",
  components: {
    RegiestForm,
  },
  data() {
    return {
      msg: "",
      profile: {},
    };
  },
  beforeCreate() {
    // eslint-disable-next-line no-unused-vars
    window.liff
      .init({
        liffId: "1657358109-M7NJYBln", // Use own liffId
      })
      .then(() => {
        // Start to use liff's api
        this.getProfile();
      });
  },
  methods: {
    getProfile: function () {
      window.liff.getProfile().then((profile) => {
        this.profile = profile;
      });
    },
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
