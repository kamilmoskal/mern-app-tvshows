import styled from "styled-components";
import posed from "react-pose";

export const InputField = styled.input`
  padding: 0.5rem 0;
  margin: 0.4rem 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px double ${({ theme }) => theme.colors.grayLight};
  border-top: 1px double ${({ theme }) => theme.colors.grayLight};
  transition: all 0.2s ease;

  &:focus {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding: 0.5rem 1rem;
    outline: none;
  }

  ::placeholder {
    opacity: 0.6;
  }
  &:focus::placeholder {
    opacity: 0.8;
  }
`;

export const AniInputField = posed(InputField)({
  focusable: true,
  init: {
    borderWidth: "2px"
  },
  focus: {
    borderWidth: "10px"
  }
});
