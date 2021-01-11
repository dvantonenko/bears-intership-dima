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
          timer: 2000,
        });
      } else if (this.getSuccessMessage) {
        {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: `${this.getSuccessMessage}`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
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
