import React from "react";
import { shallow } from "enzyme";
import Header from "./index.js";
import { findByTestAtrr } from "../../../Utils/";
const setUp = (props = {}) => {
  const component = shallow(<Header></Header>);
  return component;
};

describe("Header Compoennt", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render without erros", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render logo without erros", () => {
    const wrapper = findByTestAtrr(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });
});
