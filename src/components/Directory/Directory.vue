<template>
  <div class="directory" :data-value="name" :data-leaf="leaf">
    <div class="item" @click="handleFolder">
      <IconFolder :opened="opened" />
      <span :class="directoryNameClasses">{{ name }}</span>
    </div>
    <Tree v-if="opened" :data="contents" :leaf="leaf" />
  </div>
</template>

<script>
import IconFolder from "../Icons/IconFolder.vue";
import "../../styles/item.css";

export default {
  name: "Directory",
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
    leaf: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    handleFolder() {
      this.opened = !this.opened;
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
};
</script>

<style scoped>
.directory__name_open {
  font-weight: 700;
}
</style>