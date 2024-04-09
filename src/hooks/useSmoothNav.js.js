import { useContext } from "react";
import { Context } from "../App";

export default function useSmoothNav(projectId, aboutId, homeId, contactId) {
  const { state, dispatch, setOpenMenu } = useContext(Context);
  function handleClick(param, close) {
    close && setOpenMenu(false);
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
  return [handleClick];
}
