import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps, testStore } from "./../Utils";

const setUP = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text"
        },
        {
          title: "Example title 2",
          body: "Some text"
        },
        {
          title: "Example title 3",
          body: "Some text"
        }
      ]
    };
    wrapper = setUP(initialState);
  });
  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updatesState Method should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });
});
