import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../App";

const AboutBox = styled.div`
  display: flex;
  align-items: stretch;
  gap: 6rem;
  max-width: 85rem;
  @media (max-width: 940px) {
    max-width: 70rem;
  }
  @media (max-width: 695px) {
    max-width: 62rem;
    gap: 2.8rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 99.3vw;
    align-items: center;
  }
`;
const DesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding-right: 2rem;
  width: 60%;
  transition: all 1.3s;
  transform: translateX(100%);
  @media (max-width: 600px) {
    padding: 0 2rem;
    align-items: center;
    margin-left: 2rem;
    width: 100%;
  }
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: end;
  width: 40%;
  transform: translateX(-100%);
  transition: all 1.3s;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 100%;
  box-shadow: 0 1rem 1rem 0.5rem #0001;
  justify-self: end;
  border-radius: 0.5rem;
  @media (max-width: 600px) {
    width: 23rem;
    height: 23rem;
    border-radius: 50%;
    justify-self: start;
  }
`;
const AboutMe = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--navTextHover);
  text-transform: uppercase;
  @media (max-width: 600px) {
    margin-right: 2rem;
  }
`;
const AboutText = styled.span`
  font-size: 2rem;
  color: var(--Text);
`;
const AboutDes = styled.p`
  font-size: 1.4rem;
  color: var(--lessText);
  margin-top: 1.5rem;
`;
export default function About({ inView }) {
  const { dispatch, state, aboutRef, homeInView } = useContext(Context);
  const [animation, setAnimation] = useState(false);
  const [check, setCheck] = useState(true);
  function startAnimation() {
    (() => {
      setCheck(false);
      setAnimation(true);
    })();
  }
  inView && check && startAnimation();
  inView &&
    !homeInView &&
    !state.aboutActive &&
    dispatch({ type: "About", payload: true });
  return (
    <AboutBox ref={aboutRef}>
      <ImgBox className={animation && "activeMenu"}>
        <Img src="/aboutimage.jpeg" />
      </ImgBox>
      <DesBox className={animation && "activeMenus"}>
        <AboutMe>About me</AboutMe>
        <AboutText>
          A passionate Front-End Developer based in Lagos, Nigeria.
        </AboutText>
        <AboutDes>
          Lorem ipsum dolor sit, adipisicing elit. Omnis, libero, cum vel minus
          debitis, <br />
          tempora nobis asperiores magni quam quaerat temporibus tenetur
          exercitationem iste nemo. debitis, <br />
          tempora nobis asperiores magni quam quaerat temporibus tenetur
          exercitationem iste nemo. exercitationem iste nemo. debitis, <br />
          tempora nobis asperiores magni quam quaerat temporibus tenetur
          exercitationem iste nemo.
        </AboutDes>
      </DesBox>
    </AboutBox>
  );
}
