<template>
  <div class="tree">
    <div class="tree__item" v-for="(item, index) in data" :key="item + index">
      <Directory
        v-if="item.type == 'directory'"
        v-bind="item"
        :leaf="getLeaf(index)"
      />
      <File v-if="item.type == 'file'" v-bind="item" :leaf="getLeaf(index)" />
      <LinkElement
        v-if="item.type == 'link'"
        v-bind="item"
        :leaf="getLeaf(index)"
      />
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
    leaf: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    getLeaf(index) {
      return this.leaf ? this.leaf + "," + index : String(index);
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