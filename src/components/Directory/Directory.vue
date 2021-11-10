<template>
  <div class="directory" :data-leaf="leaf">
    <div :class="treeItemClasses" @dblclick="handleDirectoryClick">
      <IconFolder :opened="opened" />
      <span :class="directoryNameClasses">{{ name }}</span>
    </div>
    <Tree v-if="opened" :data="contents" :leaf="leaf" />
  </div>
</template>

<script>
import IconFolder from "../Icons/IconFolder.vue";
import TreeItem from "../mixins/TreeItem.vue";
import EventManager from "../../utils/EventManager";
import "../../styles/item.css";

export default {
  name: "Directory",
  extends: TreeItem,
  components: {
    IconFolder,
    Tree: () => import("../Tree/Tree.vue"),
  },
  props: {
    name: {
      type: String,
      default: () => "",
    },
    contents: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    handleDirectoryClick() {
      this.opened = !this.opened;
    },
    openDirectory(selectedLeaf) {
      if (this.leaf !== selectedLeaf) return;
      this.opened = true;
      EventManager.$emit("directory", "opened");
    },
    closeDirectory(selectedLeaf) {
      if (this.leaf !== selectedLeaf) return;
      this.opened = false;
    },
  },
  computed: {
    directoryNameClasses() {
      return [
        "directory__name",
        "item__name",
        {
          directory__name_open: this.opened,
        },
      ];
    },
  },
  mounted() {
    EventManager.$on("directory", "open", this.openDirectory);
    EventManager.$on("directory", "close", this.closeDirectory);
  },
};
</script>

<style scoped>
.directory__name_open {
  font-weight: 700;
}
</style>