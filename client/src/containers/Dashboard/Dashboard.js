import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "../../components/UI/Container";
import DraggableList from "../../components/DraggableList/DraggableList";
import Search from "../../components/Search/Search";
import { searchTVShow } from "../../store/actions/moviedbActions";
import { ListWrapper } from "./styled";
import {
  addTVShowToList,
  saveTVShowListToDB
} from "../../store/actions/showListActions";
import { transformedShowList } from "../../store/selectors/transformShowListData";

const Dashboard = ({
  searchTVShow,
  searchResults,
  addTVShowToList,
  tvShowList,
  saveTVShowListToDB
}) => {
  const searchOnChange = e => {
    searchTVShow(e);
  };
  const addShowToList = show => {
    addTVShowToList(show);
  };
  const saveListToDB = data => {
    saveTVShowListToDB(data);
  };
  return (
    <>
      <Container>
        <ListWrapper>
          <Search
            searchOnChange={searchOnChange}
            searchResults={searchResults}
            addShowToList={addShowToList}
          />
          <DraggableList tvShowList={tvShowList} saveListToDB={saveListToDB} />
        </ListWrapper>
      </Container>
    </>
  );
};

Dashboard.propTypes = {
  searchTVShow: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  addTVShowToList: PropTypes.func.isRequired,
  tvShowList: PropTypes.object.isRequired,
  saveTVShowListToDB: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.moviedb.searchResults,
  tvShowList: transformedShowList(state)
});

export default connect(
  mapStateToProps,
  { searchTVShow, addTVShowToList, saveTVShowListToDB }
)(Dashboard);
