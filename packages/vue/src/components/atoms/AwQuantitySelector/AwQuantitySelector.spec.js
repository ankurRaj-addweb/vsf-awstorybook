import { shallowMount } from "@vue/test-utils";
import AwQuantitySelector from "./AwQuantitySelector.vue";
describe("AwQuantitySelector.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwQuantitySelector);
    expect(wrapper.classes("sf-quantity-selector")).toBe(true);
  });
  it("renders component with props", () => {
    const wrapper = shallowMount(AwQuantitySelector, {
      propsData: {
        qty: 2,
        disabled: false,
        min: 1,
        max: 10,
      },
    });
    expect(wrapper.classes("sf-quantity-selector")).toBe(true);
  });
  it("will set minimum value when qty < min or invalid", () => {
    const wrapper = shallowMount(AwQuantitySelector, {
      propsData: {
        qty: "sdskdj",
        disabled: false,
        min: 5,
        max: 10,
      },
    });
    const quantityButton = wrapper.find(".sf-quantity-selector__button");
    quantityButton.trigger("click");
    expect(wrapper.classes("sf-quantity-selector")).toBe(true);
  });
  it("will set maximum value when qty > max", () => {
    const wrapper = shallowMount(AwQuantitySelector, {
      propsData: {
        qty: 12,
        disabled: false,
        min: 1,
        max: 10,
      },
    });
    const quantityButton = wrapper.find(".sf-quantity-selector__button");
    quantityButton.trigger("click");
    expect(wrapper.classes("sf-quantity-selector")).toBe(true);
  });
});
