import styled from "styled-components";

export default styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.font.bold};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
