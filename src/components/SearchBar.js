import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Search, Label } from "semantic-ui-react";

const resultRenderer = ({ title, source }) => (
  <Label content={source._embedded.brand.name + " : " + title} />
);

function SearchBar({ source }) {
  const loading = useSelector((state) => state.search.loading);
  const results = useSelector((state) => state.search.results);
  const value = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const timeoutRef = useRef();

  const handleSearchChange = useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch({ type: "START_SEARCH", query: data.value });

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: "CLEAN_QUERY" });
          return;
        }

        const re = new RegExp(_.escapeRegExp(data.value), "i");
        const isMatch = (result) =>
          re.test(result.name) || re.test(result._embedded.brand.name);

        dispatch({
          type: "FINISH_SEARCH",
          results: _.filter(source, isMatch).map((item) => ({
            title: item.name,
            source: item,
          })),
        });
      }, 300);
    },
    [dispatch, source]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Search
      aligned="right"
      loading={loading}
      onResultSelect={(e, data) =>
        dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })
      }
      onSearchChange={handleSearchChange}
      resultRenderer={resultRenderer}
      results={results}
      value={value}
    />
  );
}

export default SearchBar;
