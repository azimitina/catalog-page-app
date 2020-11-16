import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import FilterBar from "./FilterBar";
import { changeSortBy } from "../actions/appActions";

describe("FilterBar", () => {
  it("should render Dropdown", () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      app: {
        sortBy: "popularity",
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <FilterBar />
      </Provider>
    );
    expect(wrapper.find("Dropdown").length).toBe(1);
  });

  it("should trigger changeSortBy action", () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      app: {
        sortBy: "popularity",
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <FilterBar />
      </Provider>
    );
    wrapper.find("Dropdown").props().onChange(null, { value: "brand_desc" });
    expect(store.getActions()).toEqual([changeSortBy("brand_desc")]);
  });
});
