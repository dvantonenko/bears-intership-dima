<template>
  <div>
    <div class="pagination" v-for="(number, index) of pageNumbers" v-bind:key="index">
      <a
        class="item-page"
        v-on:click="$emit('paginate', number)"
        v-bind:class="{ active: currentPage === number }"
      >
        {{ number }}
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["postersPerPage", "currentPage"],
  data() {
    return {
      pageNumbers: [],
    };
  },
  methods: {
    countPage() {
      for (let i = 1; i <= Math.ceil(this.getLength / this.postersPerPage); i++) {
        this.pageNumbers.push(i);
      }
    },
  },
  mounted() {
    this.countPage();
  },
  watch: {
    postersPerPage() {
      this.pageNumbers = [];
      this.countPage();
    },
    getLength() {
      this.pageNumbers = [];
      this.countPage();
    },
  },
  computed: mapGetters(["getLength"]),
};
</script>

<style scoped>
.pagination {
  display: inline-block;
}

.active {
  background-color: #3effff;
  color: white;
}
.item-page {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 0 5px;
  cursor: pointer;
}
.item-page:hover {
  opacity: 0.7;
  color: white;
}
</style>
