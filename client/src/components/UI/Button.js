import styled from "styled-components";
import posed from "react-pose";

export const Button = styled.button`
  padding: ${props => (props.small ? "0.2rem 0.5rem" : "0.5rem 1rem")};
  margin: ${props => (props.margin ? "0.5rem 0" : "0")};
  font-size: ${props => (props.small ? ".9rem" : "1rem")};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  border-radius: ${props => (props.rounded ? "10px" : "none")};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const AnimatedButton = posed(Button)({
  pressable: true,
  init: {
    scale: 1,
    rotate: "0",
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  press: {
    scale: 0.8,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});
