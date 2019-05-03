import styled from "styled-components";

export default styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.thin};
  margin-top: 0.2rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
