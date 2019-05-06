import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, SearchList, SearchItem, AniAddBox } from "./styled";
import { InputField } from "../UI/InputField";
import { Message } from "../UI/Message";

const Search = ({ searchOnChange, searchResults, addShowToProfile }) => {
  const [searchValue, setSearchValue] = useState("");
  const onChange = e => {
    setSearchValue(e.target.value);
    searchOnChange(e.target.value);
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
                  onClick={() => addShowToProfile(result)}
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
  addShowToProfile: PropTypes.func.isRequired
};

export default Search;
