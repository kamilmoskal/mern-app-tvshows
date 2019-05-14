import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;

  ${({ theme }) => theme.media.desktop} {
    grid-gap: 2%;
    grid-template-columns: 29% 69%;
  }
`;
