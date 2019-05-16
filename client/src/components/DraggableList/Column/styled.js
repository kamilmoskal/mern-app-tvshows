import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet} {
    grid-column: ${props => (props.columnId ? "1/2" : "2/3")};
    grid-row: ${props => (props.columnId ? "1/ span 2" : "auto")};
  }
`;
export const Title = styled.h3`
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  margin: 0;
`;
export const TaskList = styled.div`
  transition: all 0.5s ease;
  background-color: ${props =>
    props.isDraggingOver ? `${props.theme.colors.gray}` : "white"};
  overflow: scroll;
  height: 100%;
`;
