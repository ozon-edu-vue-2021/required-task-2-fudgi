<template>
  <div :class="treeItemClasses" @click="handleSelection" :data-value="name">
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
  },
};
</script>

<style scoped>
</style>