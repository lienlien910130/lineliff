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
    window.liff
      .init({
        liffId: "1657358109-M7NJYBln", // Use own liffId
      })
      .then(() => {
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

