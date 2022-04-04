import { shallowMount } from "@vue/test-utils";
import AwBar from "./AwBar.vue";
describe("SfBar.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(AwBar);
    expect(component.classes("sf-bar")).toBe(true);
  });
});
