import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 300px);
  grid-gap: 10px;
  padding: 10px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 50% 50%;
    grid-template-rows: 300px 300px 70px;
  }
`;
