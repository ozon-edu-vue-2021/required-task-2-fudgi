<template>
  <div :class="fileClasses" @click="handleSelection">
    <icon-file />
    <span class="item__name">{{ name }}</span>
  </div>
</template>

<script>
import IconFile from "../Icons/IconFile.vue";
import "../../styles/item.css";

export default {
  name: "File",
  components: {
    IconFile,
  },
  props: {
    name: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    handleSelection() {
      this.selected = !this.selected;
    },
  },
  computed: {
    fileClasses() {
      return [
        "file",
        "item",
        {
          file_selected: this.selected,
        },
      ];
    },
  },
};
</script>

<style scoped>
.file_selected {
  border: 1px dashed;
}
</style>