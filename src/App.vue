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
  provide() {
    return {
      getLeaf: this.getLeaf,
    };
  },
  data: () => ({ data: [jsonData], selectedPath: "", selectedLeaf: "" }),
  methods: {
    handleLeafClick(e) {
      const target = e.target;
      const leaf =
        target.dataset?.leaf || target.closest("[data-leaf]")?.dataset?.leaf;
      if (leaf) {
        this.selectedLeaf = leaf;
      }
    },
    handlePath(e) {
      const pathArr = e
        .composedPath()
        .map((item) => item.dataset?.value)
        .filter((item) => item)
        .reverse();

      if (!pathArr.length) return;

      const path = pathArr.join("/");
      this.selectedPath = path;
    },
    handleClick(e) {
      this.handleLeafClick(e);
      this.handlePath(e);
    },
    getLeaf() {
      return this.selectedLeaf;
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
  margin: 80px 20px 20px;
}
.app__path {
  position: fixed;
  left: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20 px;
  transform: translateX(-50%);
  background-color: wheat;
}
</style>
