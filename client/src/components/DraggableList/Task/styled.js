import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 2px;
  padding-left: 10px;
  box-shadow: ${({ theme }) => theme.card};
  border-radius: 2px;
  background-color: ${props =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Image = styled.div`
  width: 50px;
  height: 50px;
  background-image: ${props => (props.bg ? `url('${props.bg}')` : "none")};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50px;
`;
