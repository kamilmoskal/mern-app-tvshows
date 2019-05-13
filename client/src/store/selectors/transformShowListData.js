import { createSelector } from "reselect";

const getShowListData = state => state.tvshows;

export const transformedShowList = createSelector(
  [getShowListData],
  showListData => {
    let transformedData = {
      tasks: {},
      columns: {
        towatch: {
          id: "towatch",
          title: "To watch",
          taskIds: []
        },
        watched: {
          id: "watched",
          title: "Watched",
          taskIds: []
        },
        inprogress: {
          id: "inprogress",
          title: "In progress",
          taskIds: []
        }
      },
      columnOrder: ["inprogress", "towatch", "watched"]
    };
    showListData.shows.forEach(show => {
      transformedData.tasks[show.id] = show;
    });
    transformedData.columns.towatch.taskIds = [...showListData.towatch];
    transformedData.columns.watched.taskIds = [...showListData.watched];
    transformedData.columns.inprogress.taskIds = [...showListData.inprogress];

    return transformedData;
  }
);
