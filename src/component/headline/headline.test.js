import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import checkPropTypes from "check-prop-types";
import { findByTestAtrr, checkProps } from "./../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("HeadLine Component", () => {
  let component;

  describe("check props types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    beforeEach(() => {
      const props = {
        header: "testHeader",
        desc: "Descripion"
      };
      component = setUp(props);
    });
    it("should render with props", () => {
      const wrapper = findByTestAtrr(component, "hc");
      expect(wrapper.length).toBe(1);
    });

    it("should render a H1", () => {
      const h1 = findByTestAtrr(component, "header");
      expect(h1.length).toBe(1);
    });

    it("should render desc", () => {
      const desc = findByTestAtrr(component, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("should not render", () => {
      const wrapper = findByTestAtrr(component, "hc");
      expect(wrapper.length).toBe(0);
    });
  });
});
