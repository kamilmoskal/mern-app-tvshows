import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 10px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 50% 50%;
  }
`;
