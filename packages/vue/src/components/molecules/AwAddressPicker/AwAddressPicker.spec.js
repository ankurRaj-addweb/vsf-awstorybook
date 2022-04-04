import { shallowMount } from "@vue/test-utils";
import AwAddressPicker from "./AwAddressPicker.vue";

describe("SfAddressPicker.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwAddressPicker);
    expect(component.classes("sf-address-picker")).toBe(true);
  });
});
