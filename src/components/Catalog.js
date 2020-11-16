import React from "react";
import Cards from "./Cards";
import get from "lodash/get";
import { Grid } from "semantic-ui-react";
import "./Catalog.scss";

function Catalog({ data }) {
  return (
    <Grid stackable columns={4}>
      {data.map((item) => {
        return (
          <Grid.Column key={item.sku}>
            <Cards
              name={item._embedded.brand.name}
              meta={item.name}
              price={item.price}
              final_price={item.final_price}
              marketingMessaging={get(
                item,
                "messaging.marketing[0].short",
                null
              )}
              image={get(item, "_embedded.images[0].thumbnail", null)}
            />
          </Grid.Column>
        );
      })}
    </Grid>
  );
}

export default Catalog;
