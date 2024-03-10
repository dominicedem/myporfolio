import { useReducer } from "react";

export default function UseTab() {
  const initialstate = {
    home: true,
    about: false,
    projects: false,
    contacts: false,
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  function reducer(state, action) {
    switch (action.type) {
      case "Home": {
        return { ...initialstate };
      }
      case "About": {
        return { ...initialstate, home: false, about: action.payload };
      }
      case "Projects": {
        return { ...initialstate, home: false, projects: action.payload };
      }
      case "Contacts": {
        return { ...initialstate, home: false, contacts: action.payload };
      }
      default: {
        return "error";
      }
    }
  }
  return [state, dispatch];
}
