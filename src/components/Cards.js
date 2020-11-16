import React from "react";
import { Card } from "semantic-ui-react";
import "./Cards.scss";

const Cards = ({
  name,
  meta,
  price,
  final_price,
  marketingMessaging,
  image,
}) => (
  <Card
    image={image}
    header={name}
    meta={meta}
    description={
      <div>
        <span className={price > final_price ? "price-line-through" : ""}>
          ${price}
        </span>
        {price > final_price && (
          <span
            style={{ marginLeft: "5px", color: "#FF0000" }}
          >{`$${final_price}`}</span>
        )}
        <h6 className="marketing-msg">{marketingMessaging}</h6>
      </div>
    }
  />
);

export default Cards;
