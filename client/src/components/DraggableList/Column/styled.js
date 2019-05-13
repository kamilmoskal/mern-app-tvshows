import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet} {
    grid-column: ${props => (props.columnId ? "2/3" : "1/2")};
    grid-row: ${props => (props.columnId ? "1/ span 2" : "auto")};
  }
`;
export const Title = styled.h3`
  padding: 8px;
`;
export const TaskList = styled.div`
  padding: 8px;
  transition: all 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? `${props.theme.colors.gray}` : "white"};
  min-height: 100px;
`;
