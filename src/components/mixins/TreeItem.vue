<script>
export default {
  inject: ["getSelectedLeaf"],
  props: {
    leaf: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    treeItemClasses() {
      return [
        "item",
        {
          item_selected: this.getSelectedLeaf() === this.leaf,
        },
      ];
    },
  },
};
</script>


