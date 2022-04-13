<template>
  <div class="sf-search-bar">
    <input
      v-focus
      class="sf-search-bar__input"
      type="search"
      :value="value"
      v-bind="$attrs"
      :placeholder="placeholder"
      v-on="listeners"
    />
    <slot name="icon">
      <AwButton
        class="sf-search-bar__button sf-button--pure"
        type="button"
        aria-label="Search"
        @click="$emit('click', value)"
      >
        <span v-if="icon" class="sf-search-bar__icon">
          <AwIcon :color="icon.color" :size="icon.size" icon="search" />
        </span>
      </AwButton>
    </slot>
  </div>
</template>
<script>
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import { focus } from "../../../utilities/directives";
export default {
  name: "SfSearchBar",
  directives: {
    focus,
  },
  components: { AwIcon, AwButton },
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String],
      default: null,
    },
    icon: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
        "keyup.enter": (event) => this.$emit("input", event.target.value),
        "keyup.esc": () => this.$emit("input", ""),
        blur: () => this.$emit("blur"),
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>