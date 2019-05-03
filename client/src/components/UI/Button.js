import styled from "styled-components";

export default styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  border-radius: ${props => (props.rounded ? "20px" : "none")};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
