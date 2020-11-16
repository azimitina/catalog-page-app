import { shallow } from "enzyme";
import Cards from "./Cards";

describe("Cards", () => {
  it("should render Card", () => {
    const props = {
      name: "Peppy Co",
      meta: "LED Light",
      price: "$180",
      final_price: "$180",
      image: "http://example.com/fancy.png",
    };
    const wrapper = shallow(<Cards {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Card with marketing message", () => {
    const props = {
      name: "Peppy Co",
      meta: "LED Light",
      price: "$180",
      final_price: "$180",
      image: "http://example.com/fancy.png",
      marketingMessaging: "Gift without the risk",
    };
    const wrapper = shallow(<Cards {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
