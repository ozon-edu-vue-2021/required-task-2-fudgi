<template>
  <div class="app" @click="handleClick">
    <p class="app__path">{{ selectedPath }}</p>
    <Tree :data="data" />
  </div>
</template>

<script>
import Tree from "./components/Tree/Tree.vue";
import jsonData from "../public/static/node_modules.json";

export default {
  name: "App",
  components: {
    Tree,
  },
  data: () => ({ data: [jsonData], selectedPath: "" }),
  methods: {
    handleClick(e) {
      const path = e
        .composedPath()
        .map((item) => item.dataset?.value)
        .filter((item) => item)
        .reverse()
        .join("/");
      if (!path) return;
      this.selectedPath = path;
    },
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 20px 20px;
  display: flex;
  flex-direction: column;
}
.app__path {
  height: 40px;
  margin: 0 auto;
}
</style>
