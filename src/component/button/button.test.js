import React from "react";
import { findByTestAtrr, checkProps } from "./../../../Utils";
import SharedButton from "./index";
import { shallow } from "enzyme";

describe("Button Component", () => {
  describe("check propttypes", () => {
    const expectedProps = {
      buttonText: "test",
      emitEvent: () => {}
    };
    const propsError = checkProps(SharedButton, expectedProps);
    expect(propsError).toBe(undefined);
  });

  describe("Test Render", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "test",
        emitEvent: mockFunc
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("should render without error", () => {
      let button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
