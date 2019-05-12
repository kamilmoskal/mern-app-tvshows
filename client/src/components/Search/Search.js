import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, SearchList, SearchItem, AniAddBox } from "./styled";
import { InputField } from "../UI/InputField";
import { Message } from "../UI/Message";

const Search = ({ searchOnChange, searchResults, addShowToList }) => {
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
      <Message>Search TV-Show</Message>
      <InputField
        placeholder="Type show name"
        type="text"
        name="show"
        value={searchValue}
        onChange={onChange}
      />
      {searchResults.length > 0 ? (
        <>
          <Message>results...</Message>
          <SearchList>
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
          </SearchList>
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
  addShowToList: PropTypes.func.isRequired
};

export default Search;
