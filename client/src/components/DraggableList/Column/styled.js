import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  padding: 8px;
`;
export const TaskList = styled.div`
  padding: 8px;
  transition: all 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  min-height: 100px;
`;
