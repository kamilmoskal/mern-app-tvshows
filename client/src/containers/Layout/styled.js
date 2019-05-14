import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  &:before {
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${props =>
      props.bgUrl
        ? `url('${props.bgUrl}') no-repeat center center/cover`
        : "black"};
    filter: grayscale(100%);
    z-index: -2;
  }
  &:after {
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    z-index: -1;
  }
`;
