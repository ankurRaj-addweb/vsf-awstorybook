import AwCard from "./AwCard.vue";
import cardImg from "../../../../public/assets/storybook/SfCard/card.jpg";

export default {
  title: "Components/Molecules/Card",
  component: AwCard,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "card-description-font": { value: "", control: "text" },
      "card-description-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "card-description-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "card-description-font-line-height": { value: "1.6", control: "text" },
      "card-description-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "image-width": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "The component for displaying information with title, image and action button",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Card title",
    },
    titleLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      description:
        "Card title level of heading (form 1 as h1 tag to 6 as h6 tag)",
    },
    description: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Card description",
    },
    link: {
      control: "text",
      defaultValue: undefined,
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      description: "Card link",
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Text displayed on button",
    },
    image: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Card image",
    },
    imageWidth: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      defaultValue: null,
      description:
        "Product image width, without unit. Could be an integer passed as Number or String type, but values like 'auto' or '100%' are not allowed.",
    },
    imageHeight: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      defaultValue: null,
      description:
        "Product image height, without unit. Could be an integer passed as Number or String type, but values like 'auto' or '100%' are not allowed.",
    },
    details: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Custom content for heading and description",
    },
    action: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Slot content will replace button",
    },
  },
  args: {
    image: cardImg,
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwCard },
  props: Object.keys(argTypes),
  template: `
  <AwCard
    :title="title"
    :titleLevel="titleLevel"
    :image="image"
    :imageWidth="imageWidth"
    :imageHeight="imageHeight"
    :description="description"
    :link="link"
    :buttonText="buttonText"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Baby Care",
  titleLevel: 3,
  description:
    "Read how to take care of your baby, see our products available, clothes and suggestions how stay healthy.",
  link: "",
  buttonText: "Learn more",
  imageWidth: 288,
  imageHeight: 189,
};

export const WithDetailsSlot = (args, { argTypes }) => ({
  components: { AwCard },
  props: Object.keys(argTypes),
  template: `
  <AwCard
    :title="title"
    :titleLevel="titleLevel"
    :image="image"
    :imageWidth="imageWidth"
    :imageHeight="imageHeight"
    :link="link"
    :buttonText="buttonText"
  >
    <template #details="{details}">
      <div style="position: absolute; bottom: -30%;">
        CUSTOM DETAILS
      </div>
    </template>
  </AwCard>`,
});
WithDetailsSlot.args = { ...Common.args };

export const WithActionSlot = (args, { argTypes }) => ({
  components: { AwCard },
  props: Object.keys(argTypes),
  template: `
  <AwCard
    :title="title"
    :titleLevel="titleLevel"
    :image="image"
    :imageWidth="imageWidth"
    :imageHeight="imageHeight"
    :description="description"
  >
    <template #action="{action}">CUSTOM ACTION</template>
  </AwCard>`,
});
WithActionSlot.args = { ...Common.args };
