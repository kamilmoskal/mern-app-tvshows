import styled from "styled-components";
import posed from "react-pose";

export const Container = styled.div`
  text-align: center;
  margin-bottom: 2px;
  padding-left: 10px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.card};
  border-radius: 2px;
  border-left: 4px solid;
  border-color: ${props =>
    props.isDragDisabled
      ? `${props.theme.colors.primaryDark}`
      : props.isDragging
      ? `${props.theme.colors.primary}`
      : "white"};
  background-color: white;
  display: grid;
  font-size: 0.8rem;

  font-weight: ${props => (props.columnId ? "700" : "400")};
  grid-template-columns: ${props =>
    props.columnId ? "3fr 1fr 1fr" : ".5fr 1fr 4fr 2fr 2fr;"};
  grid-gap: 4%;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.media.semitablet} {
    font-size: ${props => (props.columnId ? "1rem" : ".9rem")};
  }
`;

export const AniContainer = posed(Container)({
  closed: { y: "200px", opacity: 0 },
  open: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 200,
      duration: 500
    }
  }
});

export const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Image = styled.div`
  width: ${props => (props.columnId ? "70px" : "50px")};
  height: ${props => (props.columnId ? "70px" : "50px")};
  background-image: ${props => (props.bg ? `url('${props.bg}')` : "gray")};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: ${props => (props.columnId ? "70px" : "50px")};

  ${({ theme }) => theme.media.tablet} {
    width: ${props => (props.columnId ? "100px" : "50px")};
    height: ${props => (props.columnId ? "100px" : "50px")};
    background-size: ${props => (props.columnId ? "100px" : "50px")};
  }
`;
