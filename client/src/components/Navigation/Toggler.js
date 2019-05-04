import { Menu } from "styled-icons/boxicons-regular/Menu";
import styled from "styled-components";
import posed from "react-pose";

const Toggler = styled(Menu)`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 70px;
  height: 70px;
  z-index: 2;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

export default posed(Toggler)({
  hoverable: true,
  pressable: true,
  draggable: "x",
  init: {
    scale: 1,
    rotate: "0",
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  drag: { scale: 1.2 },
  press: {
    scale: 0.8,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});
