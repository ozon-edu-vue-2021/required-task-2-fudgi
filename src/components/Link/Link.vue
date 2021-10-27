<template>
  <a :href="target" class="link">{{ name }}</a>
</template>

<script>
export default {
  name: "Link",
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
.link {
  display: block;
}
</style>