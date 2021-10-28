<template>
  <div class="tree">
    <div class="tree__item" v-for="(item, index) in data" :key="item + index">
      <Directory
        v-if="item.type == 'directory'"
        v-bind="item"
        :leaf="getLeaf(index)"
      />
      <Leaf v-else v-bind="item" :leaf="getLeaf(index)">
        <IconLink v-if="item.type == 'link'" />
        <IconFile v-else />
      </Leaf>
    </div>
  </div>
</template>

<script>
import Directory from "../Directory/Directory.vue";
import Leaf from "../Leaf/Leaf.vue";
import IconLink from "../Icons/IconLink.vue";
import IconFile from "../Icons/IconFile.vue";

export default {
  name: "Tree",
  components: {
    Directory,
    Leaf,
    IconLink,
    IconFile,
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