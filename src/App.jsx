import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import GlobalStyle from "./style/GlobalStyle";
import { createContext, useReducer, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Context = createContext("");

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [notify, setNotify] = useState(false);

  const { ref: aboutRef, inView: aboutInVeiw } = useInView();
  const { ref: projectRef, inView: projectInView } = useInView();
  const { ref: homeRef, inView: homeInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();
  const initialstate = {
    home: true,
    homeActive: true,
    about: false,
    aboutActive: false,
    projects: false,
    projectsActive: false,
    contacts: false,
    contactsActive: false,
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  function reducer(state, action) {
    switch (action.type) {
      case "Home": {
        if (!state.homeActive);
        return { ...initialstate };
      }
      case "About": {
        if (!state.aboutActive);
        return {
          ...initialstate,
          home: false,
          homeActive: false,
          about: action.payload,
          aboutActive: true,
        };
      }
      case "Projects": {
        if (!state.projectsActive);
        return {
          ...initialstate,
          home: false,
          homeActive: false,
          projects: action.payload,
          projectsActive: true,
        };
      }
      case "Contacts": {
        if (!state.contactsActive);
        return {
          ...initialstate,
          home: false,
          homeActive: false,
          contacts: action.payload,
          contactsActive: true,
        };
      }
      default: {
        return "error";
      }
    }
  }
  return (
    <>
      <GlobalStyle />
      <Context.Provider
        value={{
          openMenu,
          setOpenMenu,
          state,
          dispatch,
          aboutRef,
          aboutInVeiw,
          projectRef,
          projectInView,
          homeRef,
          homeInView,
          setNotify,
          notify,
          contactRef,
          contactInView,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
