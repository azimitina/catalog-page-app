import { shallow } from "enzyme";
import Catalog from "./Catalog";

describe("Catalog", () => {
  it("should render Catalog", () => {
    const props = {
      data: [
        {
          sku: "123456",
          _embedded: { brand: { name: "Nike" } },
          name: "Indy Legging",
          price: 300,
          final_price: 300,
        },
      ],
    };
    const wrapper = shallow(<Catalog {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Catalog with multiple cards", () => {
    const props = {
      data: [
        {
          sku: "123456",
          _embedded: { brand: { name: "Nike" } },
          name: "Indy Legging",
          price: 300,
          final_price: 300,
        },
        {
          sku: "34567",
          _embedded: {
            brand: { name: "Nike" },
            images: [
              {
                thumbnail: "nike-small.jpg",
              },
            ],
          },
          name: "Indy Legging",
          price: 300,
          final_price: 300,
          messaging: { marketing: [{ short: "Just do it" }] },
        },
      ],
    };
    const wrapper = shallow(<Catalog {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
