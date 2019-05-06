import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "../../components/UI/Container";
import DraggableList from "../../components/DraggableList/DraggableList";
import Search from "../../components/Search/Search";
import { searchShow } from "../../store/actions/moviedbActions";

const Dashboard = ({ searchShow, searchResults }) => {
  const searchOnChange = e => {
    searchShow(e);
  };
  const addShowToProfile = show => {
    console.log(show);
  };
  return (
    <>
      <Container>
        <Search
          searchOnChange={searchOnChange}
          searchResults={searchResults}
          addShowToProfile={addShowToProfile}
        />
        <DraggableList />
      </Container>
    </>
  );
};

Dashboard.propTypes = {
  searchShow: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.moviedb.searchResults
});

export default connect(
  mapStateToProps,
  { searchShow }
)(Dashboard);
