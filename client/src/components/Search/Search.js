import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, AniSearchList, SearchItem, AniAddBox } from "./styled";
import { InputField } from "../UI/InputField";
import { Message } from "../UI/Message";
import { CubeGrid } from "styled-spinkit";
import { AddBox } from "styled-icons/material/AddBox";

const Search = ({
  searchOnChange,
  searchResults,
  addShowToList,
  isLoading
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  const onChange = e => {
    const value = e.target.value;
    setSearchValue(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      setTimeout(() => {
        searchOnChange(value);
      }, 500)
    );
  };
  return (
    <Container>
      <Message bold>Search TV-Show</Message>
      <InputField
        placeholder="Type show name"
        type="text"
        name="show"
        value={searchValue}
        onChange={onChange}
      />
      {isLoading ? (
        <CubeGrid color="#ec4d37" size={60} />
      ) : searchResults.length > 0 ? (
        <>
          <Message>results...</Message>
          <AniSearchList initialPose="closed" pose="open">
            {searchResults.map(result => (
              <SearchItem key={result.id}>
                <AniAddBox onClick={() => addShowToList(result)}>
                  <AddBox title="Add to profile" />
                </AniAddBox>
                {result.name} <strong>({result.date})</strong>
              </SearchItem>
            ))}
          </AniSearchList>
        </>
      ) : (
        <Message>No results</Message>
      )}
    </Container>
  );
};

Search.propTypes = {
  searchOnChange: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  addShowToList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Search;
