import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { Context } from "../App";

const MenuBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--menuBack);
  gap: 4rem;
  width: 100vw;
  height: 100vh;
  padding-top: 33vh;
  position: relative;
`;
const List = styled.span`
  font-size: 2rem;
  color: var(--navTextHover);
  text-transform: uppercase;
  &:hover {
    color: var(--Hover);
  }
`;
const iconstyle = {
  fontSize: "2.7rem",
  cursor: "pointer",
  color: "var(--navTextHover)",
  transition: "all 0.3s",
  position: "absolute",
  top: "15%",
  right: "8%",
};
export default function MenuBar() {
  const { setOpenMenu } = useContext(Context);
  return (
    <MenuBarBox>
      <RxCross1 style={iconstyle} onClick={() => setOpenMenu(false)} />
      <List>Home</List>
      <List>About</List>
      <List>Projects</List>
      <List>Contacts</List>
    </MenuBarBox>
  );
}
