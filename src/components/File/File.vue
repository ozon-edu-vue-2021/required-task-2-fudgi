<template>
  <div :class="treeItemClasses" :data-value="name" :data-leaf="leaf">
    <slot></slot>
    <span class="item__name">{{ name }}</span>
  </div>
</template>

<script>
import TreeItem from "../TreeItem/TreeItem.vue";
import "../../styles/item.css";

export default {
  name: "File",
  extends: TreeItem,
  props: {
    name: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
</style>