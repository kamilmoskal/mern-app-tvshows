import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 10px 0;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1fr 2fr;
  }
`;
