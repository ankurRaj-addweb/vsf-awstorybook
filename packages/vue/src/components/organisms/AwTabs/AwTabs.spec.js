import { mount, shallowMount } from "@vue/test-utils";
import AwTabs from "./AwTabs.vue";
describe("AwTabs.vue", () => {
  it("renders a tabs", () => {
    const component = shallowMount(AwTabs);
    expect(component.classes("sf-tabs")).toBe(true);
  });
  it("checks if Tab slot is passed correctly", () => {
    const component = shallowMount(AwTabs, {
      slots: {
        default: `<p class="test-class">test-content</p>`,
      },
    });
    expect(component.find(".test-class").text()).toMatch("test-content");
  });
  it("check if navigation contains title passed in tab", () => {
    const tabsHtml = "<AwTab title='Tab1' /><AwTab title='Tab2' />";
    const component = mount(AwTabs, {
      slots: {
        default: tabsHtml,
      },
    });
    expect(component.findAll(".sf-tabs__title").length).toBe(2);
  });
});
