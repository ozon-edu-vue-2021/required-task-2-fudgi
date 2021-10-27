<template>
  <div :title="target" class="link item">
    <icon-link />
    <span class="item__name">{{ name }} </span>
  </div>
</template>

<script>
import IconLink from "../Icons/IconLink.vue";
import "../../styles/item.css";

export default {
  name: "Link",
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