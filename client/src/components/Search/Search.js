import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, AniSearchList, SearchItem, AniAddBox } from "./styled";
import { InputField } from "../UI/InputField";
import { Message } from "../UI/Message";
import { CubeGrid } from "styled-spinkit";

const Search = ({ searchOnChange, searchResults, addShowToList }) => {
  const [searchValue, setSearchValue] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const onChange = e => {
    const value = e.target.value;
    setSearchValue(value);
    setIsTyping(true);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      setTimeout(() => {
        searchOnChange(value);
        setIsTyping(false);
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
      {searchResults.length > 0 && !isTyping ? (
        <>
          <Message>results...</Message>
          <AniSearchList initialPose="closed" pose="open">
            {searchResults.map(result => (
              <SearchItem key={result.id}>
                <AniAddBox
                  size={30}
                  title="Add to profile"
                  onClick={() => addShowToList(result)}
                />{" "}
                {result.name} <strong>({result.date})</strong>
              </SearchItem>
            ))}
          </AniSearchList>
        </>
      ) : (
        <Message>No results</Message>
      )}
      {isTyping ? <CubeGrid color="#ec4d37" size={60} /> : null}
    </Container>
  );
};

Search.propTypes = {
  searchOnChange: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  addShowToList: PropTypes.func.isRequired
};

export default Search;
