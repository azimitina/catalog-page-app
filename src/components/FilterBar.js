import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { changeSortBy } from "../actions/appActions";

const listOptions = [
  {
    key: "popularity",
    text: "Popularity",
    value: "popularity",
  },
  {
    key: "new",
    text: "New Arrival",
    value: "new",
  },
  {
    key: "price_high",
    text: "Price High to Low",
    value: "price_high",
  },
  {
    key: "price_low",
    text: "Price Low to High",
    value: "price_low",
  },
  {
    key: "brand_asc",
    text: "Brand A to Z",
    value: "brand_asc",
  },
  {
    key: "brand_desc",
    text: "Brand Z to A",
    value: "brand_desc",
  },
];

const FilterBar = () => {
  const sortBy = useSelector((state) => state.app.sortBy);
  const dispatch = useDispatch();
  return (
    <Dropdown
      onChange={(e, { value }) => dispatch(changeSortBy(value))}
      placeholder="Sort items"
      selection
      options={listOptions}
      value={sortBy}
    />
  );
};

export default FilterBar;
