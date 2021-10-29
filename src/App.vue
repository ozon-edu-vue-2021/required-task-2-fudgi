<template>
  <div class="app" @click="handleClick">
    <p class="app__path">{{ selectedPath }}</p>
    <Tree :data="data" />
  </div>
</template>

<script>
import Tree from "./components/Tree/Tree.vue";
import EventManager from "./utils/EventManager";
import jsonData from "../public/static/node_modules.json";
import { Arrow, arrowsKeyCodes } from "./data/data";
import {
  getContentsLength,
  getLastIndex,
  getConcatedPath,
} from "./utils/utils";

export default {
  name: "App",
  components: {
    Tree,
  },
  provide() {
    return {
      getSelectedLeaf: this.getSelectedLeaf,
    };
  },
  data: () => ({
    data: [jsonData],
    selectedLeaf: "0",
    openRequest: false,
  }),
  mounted() {
    document.addEventListener("keydown", this.handleKeyPress);
    EventManager.$on("directory", "opened", this.handleDirectoryOpen);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeyPress);
    EventManager.$off("directory", "opened", this.handleDirectoryOpen);
  },
  methods: {
    handleClick(e) {
      const target = e.target;
      const leaf =
        target.dataset?.leaf || target.closest("[data-leaf]")?.dataset?.leaf;
      if (leaf) {
        this.selectedLeaf = leaf;
      }
    },
    getSelectedLeaf() {
      return this.selectedLeaf;
    },
    handleKeyPress(e) {
      const key = e.keyCode;
      if (!arrowsKeyCodes.includes(key)) return;
      e.preventDefault();
      const path = this.getPath();
      const lastLeaf = getLastIndex(path);

      if (key === Arrow.DOWN) {
        const length = getContentsLength(this.data, path);
        const nextLeaf = Number(path[lastLeaf]) + 1;
        const lastContentsIndex = length ? length - 1 : 0;
        path[lastLeaf] =
          nextLeaf > lastContentsIndex ? lastContentsIndex : nextLeaf;
        this.setPath(path);
      } else if (key === Arrow.UP) {
        const prevLeaf = Number(path[lastLeaf]) - 1;
        path[lastLeaf] = prevLeaf >= 0 ? prevLeaf : 0;
        this.setPath(path);
      } else if (key === Arrow.RIGHT) {
        this.openRequest = true;
        EventManager.$emit("directory", "open", this.selectedLeaf);
      } else if (key === Arrow.LEFT) {
        if (path.length > 1) path.pop();
        this.setPath(path);
        EventManager.$emit("directory", "close", this.selectedLeaf);
      }
    },
    handleDirectoryOpen() {
      if (!this.openRequest) return;
      this.openRequest = false;
      this.selectedLeaf = `${this.selectedLeaf},0`;
    },
    getPath() {
      return this.selectedLeaf.split(",");
    },
    setPath(path) {
      this.selectedLeaf = path.join(",");
    },
  },
  computed: {
    selectedPath() {
      return getConcatedPath(this.data, this.getPath());
    },
  },
};
</script>

<style>
html {
  background-color: #afafaf;
}
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
  padding: 5px 20px;
  margin: 0;
  transform: translateX(-50%);
  background-color: #d3c7b2;
}
</style>
