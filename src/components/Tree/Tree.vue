<template>
  <div class="tree">
    <div class="tree__item" v-for="(item, index) in data" :key="item + index">
      <Directory
        v-if="item.type == 'directory'"
        v-bind="item"
        :leaf="getSelectedLeaf(index)"
      />
      <Leaf v-else v-bind="item" :leaf="getSelectedLeaf(index)">
        <IconLeaf :type="item.type" />
      </Leaf>
    </div>
  </div>
</template>

<script>
import Directory from "../Directory/Directory.vue";
import Leaf from "../Leaf/Leaf.vue";
import IconLeaf from "../Icons/IconLeaf.vue";

export default {
  name: "Tree",
  components: {
    Directory,
    Leaf,
    IconLeaf,
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
    getSelectedLeaf(index) {
      return this.leaf ? `${this.leaf},${index}` : String(index);
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