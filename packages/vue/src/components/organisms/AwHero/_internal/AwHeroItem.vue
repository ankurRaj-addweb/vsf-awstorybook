<template>
  <li class="glide__slide sf-hero-item" :style="style" data-testid="hero-item">
    <div class="sf-hero-item__wrapper sf-hero-item__wrapper--desktop">
      <slot name="subtitle" v-bind="{ subtitle }">
        <span
          :class="{ 'display-none': !subtitle }"
          class="sf-hero-item__subtitle"
          >{{ subtitle }}</span
        >
      </slot>
      <slot name="title" v-bind="{ title }">
        <span :class="{ 'display-none': !title }" class="sf-hero-item__title">{{
          title
        }}</span>
      </slot>
      <slot name="call-to-action" v-bind="{ buttonText, link }">
        <AwButton
          v-if="buttonText"
          :link="link"
          class="sf-hero-item__button"
          data-testid="hero-cta-button"
        >
          {{ buttonText }}
        </AwButton>
      </slot>
      <slot name="withImgTag" />
    </div>
    <component
      :is="wrapper"
      class="sf-hero-item__wrapper sf-hero-item__wrapper--mobile"
      :link="link"
    >
      <slot name="subtitle" v-bind="{ subtitle }">
        <span
          :class="{ 'display-none': !subtitle }"
          class="sf-hero-item__subtitle"
          >{{ subtitle }}</span
        >
      </slot>
      <slot name="title" v-bind="{ title }">
        <span :class="{ 'display-none': !title }" class="sf-hero-item__title">{{
          title
        }}</span>
      </slot>
      <slot name="withImgTag" />
    </component>
  </li>
</template>
<script>
import AwButton from "../../../atoms/AwButton/AwButton.vue";
import AwLink from "../../../atoms/AwLink/AwLink.vue";
export default {
  name: "AwHeroItem",
  components: {
    AwButton,
    AwLink,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
    image: {
      type: [Object, String],
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
    imageTag: {
      type: String,
      default: "",
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    style() {
      const image = this.image;
      const isImageString = typeof image === "string";
      const background = this.background;
      const nuxtImgConvert = (imgUrl) => {
        return `url(${this.$img(imgUrl, this.nuxtImgConfig)})`;
      };
      if (this.imageTag === "nuxt-img" || this.imageTag === "nuxt-picture") {
        return {
          "--hero-item-background-image": isImageString
            ? nuxtImgConvert(image)
            : {
                "--hero-item-background-image-mobile": nuxtImgConvert(
                  image.mobile
                ),
                "--hero-item-background-image": nuxtImgConvert(image.desktop),
              },
          "--_banner-background-color": background,
        };
      } else {
        return {
          "--hero-item-background-image": isImageString
            ? `url(${image})`
            : `url(${image.desktop})`,
          "--hero-item-background-image-mobile":
            image.mobile && `url(${image.mobile})`,
          "background-color": background,
        };
      }
    },
    wrapper() {
      return this.link ? "AwLink" : "AwButton";
    },
  },
};
</script>
