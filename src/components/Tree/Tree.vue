<template>
  <div class="tree">
    <div class="tree__item" v-for="(item, index) in data" :key="item + index">
      <directory v-if="item.type == 'directory'" v-bind="item" />
      <file v-if="item.type == 'file'" v-bind="item" />
      <link-element v-if="item.type == 'link'" v-bind="item" />
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
</style>