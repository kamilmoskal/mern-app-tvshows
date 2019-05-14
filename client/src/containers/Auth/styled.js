import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.media.semitablet} {
    width: 400px;
  }
`;
