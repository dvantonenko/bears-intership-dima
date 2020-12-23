<template>
  <div></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    showAlert() {
      if (this.getErrorMessage) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: `${this.getErrorMessage}`,
        });
      } else if (this.getSuccessMessage) {
        {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: `${this.getSuccessMessage}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else return;
      setTimeout(() => {
        this.$store.dispatch("clearMessages");
      }, 1000);
    },
  },
  mounted() {
    this.showAlert();
  },
  computed: mapGetters(["getSuccessMessage", "getErrorMessage"]),
  watch: {
    getErrorMessage() {},
  },
};
</script>
