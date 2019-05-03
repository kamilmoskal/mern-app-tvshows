import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
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
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
    z-index: -1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100vh;
  opacity: 0.9;

  ${({ theme }) => theme.media.semitablet} {
    width: 400px;
  }
`;
