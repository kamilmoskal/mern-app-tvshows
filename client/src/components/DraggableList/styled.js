import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 300px 300px 300px auto;
  grid-gap: 15px 2%;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 49% 49%;
    grid-template-rows: 300px 300px auto;
  }
`;

export const Wrapper = styled.div`
  background-color: white;
  padding: 10px;
`;
