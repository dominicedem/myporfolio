import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import { useContext } from "react";
import { Context } from "../App";
import useSmoothNav from "../hooks/useSmoothNav.js.js";

const NavCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 2.5vh 1vw;
  background: var(--navBack);
  @media (max-width: 600px) {
    padding: 2.5vh 3vw;
  }
`;
const NavName = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: var(--text);
`;
const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 700px) {
    gap: 0.8rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const NavLogo = styled.img`
  width: 3.8rem;
`;
const Lists = styled.li`
  color: var(--text);
  font-size: 2rem;
  list-style: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  &:hover {
    color: var(--navTextHover);
  }
`;
const MenuBox = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: inline-block;
  }
`;
const iconstyle = {
  fontSize: "3rem",
  cursor: "pointer",
  color: " var(--navTextHover)",
  transition: "all 0.3s",
};
export default function Navigation({ projectId, aboutId, homeId, contactId }) {
  const { setOpenMenu, state } = useContext(Context);
  const [handleClick] = useSmoothNav(projectId, aboutId, homeId, contactId);
  return (
    <NavCon>
      <NameBox>
        <NavLogo src="/portfolioLogo.png" />
        <NavName>Dom.Dev</NavName>
      </NameBox>
      <NavList>
        <Lists
          className={state.home && "active"}
          onClick={() => handleClick("Home")}
        >
          Home
        </Lists>
        <Lists
          className={state.about && "active"}
          onClick={() => handleClick("About")}
        >
          About
        </Lists>
        <Lists
          className={state.projects && "active"}
          onClick={() => handleClick("Projects")}
        >
          Projects
        </Lists>
        <Lists
          className={state.contacts && "active"}
          onClick={() => handleClick("Contacts")}
        >
          Contacts
        </Lists>
      </NavList>
      <MenuBox onClick={() => setOpenMenu((el) => !el)}>
        <SlMenu style={iconstyle} />
      </MenuBox>
    </NavCon>
  );
}
