import styled from "styled-components";

export const Message = styled.p`
  margin: 5px 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${props => (props.small ? ".8rem" : ".9rem")};
  font-weight: ${props => (props.bold ? "700" : "400")};
`;
