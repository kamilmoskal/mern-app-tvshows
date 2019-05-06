import styled from "styled-components";
import { AddBox } from "styled-icons/material/AddBox";
import posed from "react-pose";

export const Container = styled.div`
  padding: 10px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
`;

export const SearchList = styled.ul`
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const SearchItem = styled.li`
  padding: 0 15px;
  margin: 5px 0;
  font-size: 0.9rem;
`;

export const AddBoxStyled = styled(AddBox)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const AniAddBox = posed(AddBoxStyled)({
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
