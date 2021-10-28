<script>
export default {
  inject: ["getLeaf"],
  computed: {
    treeItemClasses() {
      return [
        "item",
        {
          item_selected: this.getLeaf() === this.leaf,
        },
      ];
    },
  },
};
</script>


