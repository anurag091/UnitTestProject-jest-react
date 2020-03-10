import { GET_POST } from "./reducer";

import postsReducers from "./reducer";

describe("POST reducers", () => {
  it("should POST reducers default state", () => {
    const newState = postsReducers(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should returb new state if receiving types", () => {
    const posts = [{ title: "test1" }, { title: "test2" }];
    const newState = postsReducers(undefined, {
      type: GET_POST,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
