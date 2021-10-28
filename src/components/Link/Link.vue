<template>
  <div
    :title="target"
    :class="treeItemClasses"
    @click="handleSelection"
    :data-value="name"
  >
    <IconLink />
    <span class="item__name">{{ name }} </span>
  </div>
</template>

<script>
import IconLink from "../Icons/IconLink.vue";
import TreeItem from "../TreeItem/TreeItem.vue";
import "../../styles/item.css";

export default {
  name: "Link",
  extends: TreeItem,
  components: {
    IconLink,
  },
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