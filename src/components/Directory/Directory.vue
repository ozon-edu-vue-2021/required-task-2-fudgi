<template>
  <div class="directory">
    <div :class="directoryNameClasses" @click="handleFolder">{{ name }}</div>
    <tree v-if="opened" :data="contents" />
  </div>
</template>

<script>
export default {
  name: "Directory",
  components: {
    Tree: () => import("../Tree/Tree.vue"),
  },
  props: {
    name: {
      type: String,
      default: () => "",
    },
    contents: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    handleFolder() {
      this.opened = !this.opened;
    },
  },
  computed: {
    directoryNameClasses() {
      return [
        "directory__name",
        {
          directory__name_open: this.opened,
        },
      ];
    },
  },
};
</script>

<style scoped>
.directory__name_open {
  font-weight: 700;
  color: blueviolet;
}
</style>