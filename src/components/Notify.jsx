import styled from "styled-components";
import { MdCancel } from "react-icons/md";

const Tests = styled.div`
  font-size: 1.8rem;
  color: var(--Text);
  position: relative;
  padding: 1.5rem 2rem;
  background-color: var(--background1);
  cursor: pointer;
  z-index: 10000;
  width: fit-content;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--navTextHover);
    height: 3px;
    transition: all 2s ease-in;
  }
`;
const iconstyle = {
  fontSize: "2rem",
  cursor: "pointer",
  color: "var(--navTextHover)",
};
export default function Notify({ notify }) {
  return (
    <Tests className={notify && "roll"}>
      <MdCancel style={iconstyle} />
      Under developement
    </Tests>
  );
}
