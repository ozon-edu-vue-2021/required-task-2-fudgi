<template>
  <div :class="treeItemClasses" :data-value="name" :data-leaf="leaf">
    <IconFile />
    <span class="item__name">{{ name }}</span>
  </div>
</template>

<script>
import IconFile from "../Icons/IconFile.vue";
import TreeItem from "../TreeItem/TreeItem.vue";
import "../../styles/item.css";

export default {
  name: "File",
  extends: TreeItem,
  components: {
    IconFile,
  },
  props: {
    name: {
      type: String,
      default: () => "",
    },
    leaf: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
</style>