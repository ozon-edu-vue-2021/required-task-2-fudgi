<template>
  <div :title="target" :class="treeItemClasses" :data-leaf="leaf">
    <slot></slot>
    <span class="item__name">{{ name }} </span>
  </div>
</template>

<script>
import TreeItem from "../mixins/TreeItem.vue";
import "../../styles/item.css";

export default {
  name: "Leaf",
  extends: TreeItem,
  props: {
    name: {
      type: String,
      default: () => "",
    },
    target: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
</style>