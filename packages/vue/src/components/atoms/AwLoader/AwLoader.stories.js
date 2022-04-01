import AwLoader from "./AwLoader.vue";
import AwImage from "../AwImage/AwImage.vue";


export default {
  title: "Components/Atoms/Loader",
  component: AwLoader,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "loader-overlay-background": { value: "var(--c-white)", control: "text" },
      "loader-spinner-stroke": { value: "var(--c-primary)", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The Overlay loading spinner, wrapped around elements for indicating long running tasks like image loading. It's Vue 2 functional component.",
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story /></div>' }),
  ],
  argTypes: {
    loading: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Shows the loader on top of the existing content",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Slot for the actual content being loaded",
    },
    loader: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace the loader",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwLoader, AwImage },
  props: Object.keys(argTypes),
  template: `<AwLoader :loading="loading">
      <AwImage src="/assets/storybook/AwImage/product-216x326.jpg" alt="dress" :width="216" :height="326"/>
    </AwLoader>`,
});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const WithLoaderSlot = (args, { argTypes }) => ({
  components: { AwLoader, AwImage },
  props: Object.keys(argTypes),
  template: `
  <AwLoader
    :loading="loading">
    <AwImage src="/assets/storybook/AwImage/product-216x326.jpg" alt="dress" :width="216" :height="326"/>
    <template #loader>
      loading...
    </template>
  </AwLoader>`,
});

WithLoaderSlot.args = { ...Loading.args };