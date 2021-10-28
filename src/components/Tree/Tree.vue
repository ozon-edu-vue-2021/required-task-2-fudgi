<template>
  <div class="tree">
    <div class="tree__item" v-for="(item, index) in data" :key="item + index">
      <Directory v-if="item.type == 'directory'" v-bind="item" />
      <File v-if="item.type == 'file'" v-bind="item" />
      <LinkElement v-if="item.type == 'link'" v-bind="item" />
    </div>
  </div>
</template>

<script>
import Directory from "../Directory/Directory.vue";
import File from "../File/File.vue";
import LinkElement from "../Link/Link.vue";

export default {
  name: "Tree",
  components: {
    Directory,
    File,
    LinkElement,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.tree {
  margin-left: 40px;
}
.tree__item {
  margin-top: 3px;
}
</style>