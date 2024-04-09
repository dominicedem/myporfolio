import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { Context } from "../App";
import useSmoothNav from "../hooks/useSmoothNav.js.js";

const MenuBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--menuBack);
  gap: 5rem;
  width: 100vw;
  height: 100vh;
  padding-top: 30vh;
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
  top: "10%",
  right: "15%",
};
export default function MenuBar({ projectId, aboutId, homeId, contactId }) {
  const { setOpenMenu } = useContext(Context);
  const [handleClick] = useSmoothNav(projectId, aboutId, homeId, contactId);
  return (
    <MenuBarBox>
      <RxCross1 style={iconstyle} onClick={() => setOpenMenu(false)} />
      <List onClick={() => handleClick("Home", "close")}>Home</List>
      <List onClick={() => handleClick("About", "close")}>About</List>
      <List onClick={() => handleClick("Projects", "close")}>Projects</List>
      <List onClick={() => handleClick("Contacts", "close")}>Contacts</List>
    </MenuBarBox>
  );
}
