import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import { useContext } from "react";
import { Context } from "../App";

const NavCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 2.5vh 1vw;
  background: var(--background);
`;
const NavName = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text);
`;
const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 600px) {
    display: none;
  }
`;
const NavLogo = styled.img`
  width: 3rem;
`;
const Lists = styled.li`
  font-size: 1.8rem;
  color: var(--text);
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
  fontSize: "2.7rem",
  cursor: "pointer",
  color: " var(--navTextHover)",
  transition: "all 0.3s",
};
export default function Navigation({ projectId, aboutId, homeId, contactId }) {
  const { setOpenMenu, state, dispatch } = useContext(Context);
  function handleClick(param) {
    param === "Home" &&
      !state.homeActive &&
      dispatch({ type: "Home", payload: true });
    param === "About" &&
      !state.aboutActive &&
      dispatch({ type: "About", payload: true });
    param === "Projects" &&
      !state.projectsActive &&
      dispatch({ type: "Projects", payload: true });
    param === "Contacts" &&
      !state.contactsActive &&
      dispatch({ type: "Contacts", payload: true });
    scroll(param);
  }
  function scroll(ele) {
    ele === "About" && aboutId.current.scrollIntoView({ behavior: "smooth" });
    ele === "Home" && homeId.current.scrollIntoView({ behavior: "smooth" });
    ele === "Contacts" &&
      contactId.current.scrollIntoView({ behavior: "smooth" });
    ele === "Projects" &&
      projectId.current.scrollIntoView({ behavior: "smooth" });
  }
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
