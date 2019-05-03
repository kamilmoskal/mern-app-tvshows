import styled from "styled-components";

export const ErrorItem = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ErrorWrapper = styled.div`
  padding: 0.5rem;
  margin: 1rem 0;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;
