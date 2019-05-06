import styled from "styled-components";

export const Message = styled.p`
  margin: 5px 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 700;
`;
