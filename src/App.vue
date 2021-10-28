<template>
  <div id="app">
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
  data: () => ({ data: [jsonData] }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 20px 20px;
  display: flex;
}
</style>
