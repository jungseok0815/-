import styled from "styled-components";

const Main1 = styled.ul``;
const A = styled.div`
  display: flex;
`;
const Menu = styled.div`
  font-size: 10pt;
`;
const List1 = styled.li`
  margin-top: 10px;
  border: solid 2px;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  list-style: none;
  transition: all 0.3s ease-in-out;
  width: 300px;
  height: 50px;
  opacity: 1;

  &:hover {
    transform: scaleX(1.1);
  }
`;

const Check = styled.div`
  opacity: 1;
`;
const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  display: block;

  width: 20px;
  height: 20px;
  top: 0px;
  left: 0;
  border: 1px solid #10a3f9;
  border-radius: 3px;
  background-color: white;
`;
export { Main1, List1, Check, CheckBox, A, Menu };
