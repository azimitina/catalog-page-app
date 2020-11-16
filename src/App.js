import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Breadcrumb,
  Container,
  Loader,
  Dimmer,
  Segment,
  Message,
  Icon,
} from "semantic-ui-react";
import { fetchWomensClothing } from "./actions/appActions";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";

import "./App.css";

function App() {
  const fetching = useSelector((state) => state.app.fetching);
  const error = useSelector((state) => state.app.error);
  const sortBy = useSelector((state) => state.app.sortBy);
  const womensClothing = useSelector((state) => state.app.womensClothing);
  const filteredWomensClothing = useSelector((state) => state.search.results);
  const catalogData =
    filteredWomensClothing.length > 0
      ? filteredWomensClothing.map((item) => item.source)
      : womensClothing;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWomensClothing(sortBy));
  }, [dispatch, sortBy]);

  return error ? (
    <Container>
      <Message negative>
        <Message.Header>OH NO!</Message.Header>
        <p>
          Looks like something went wrong on our page end. Head back to the home
          page please
        </p>
      </Message>
    </Container>
  ) : (
    <div className="App">
      <Container>
        <Dimmer active={fetching}>
          <Loader content="Loading" />
        </Dimmer>
        <Navbar />
        <Segment secondary textAlign="center" className="segment-Container">
          <div style={{ marginTop: "10px" }}>
            Gift without the risk. Free extended returns* 'til Jan 10
          </div>
          <SearchBar source={womensClothing} />
        </Segment>
        <Segment textAlign="left" className="segment-Container">
          <Breadcrumb style={{ marginTop: "15px" }}>
            <Breadcrumb.Section>WOMEN</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>CLOTHING</Breadcrumb.Section>
          </Breadcrumb>
          <FilterBar />
        </Segment>
        <Catalog data={catalogData} />
        <Segment inverted className="segment-Container">
          <span>Stay in touch</span>
          <Icon name="rocketchat" size="large" />
        </Segment>
      </Container>
    </div>
  );
}

export default App;
