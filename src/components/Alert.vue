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
    successAlert() {
      return this.$swal({
        icon: "error",
        title: "Oops...",
        text: `${this.getErrorMessage}`,
        timer: 2000,
      });
    },
    errorAlert() {
      return this.$swal({
        position: "top-end",
        icon: "success",
        title: `${this.getSuccessMessage}`,
        showConfirmButton: false,
        timer: 2000,
      });
    },
    showAlert() {
      if (this.getErrorMessage) {
        this.successAlert();
      } else if (this.getSuccessMessage) {
        this.errorAlert();
      }
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
