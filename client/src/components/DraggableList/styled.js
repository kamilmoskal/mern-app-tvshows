import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;
