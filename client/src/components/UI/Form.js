import styled from "styled-components";
import posed from "react-pose";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

export const AnimateForm = posed(Form)({
  closed: { y: "200px", opacity: 0 },
  open: { y: "0", opacity: 1, transition: { type: "spring", mass: 0.7 } }
});
