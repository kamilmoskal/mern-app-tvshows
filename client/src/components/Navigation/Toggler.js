import styled from "styled-components";
import posed from "react-pose";

const Toggler = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 70px;
  height: 70px;
  z-index: 20;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

export default posed(Toggler)({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 0.8,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});
