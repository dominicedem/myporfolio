import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../App";

const AboutBox = styled.div`
  display: flex;
  align-items: stretch;
  gap: 4rem;
  width: 85vw;
  @media (max-width: 900px) {
    max-width: 90vw;
    flex-direction: column;
    width: 99.3vw;
    align-items: center;
  }
`;
const DesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;
  width: 60%;
  transition: all 1.3s;
  transform: translateX(150%);
  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
  }
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: end;
  width: 40%;
  transform: translateX(-200%);
  transition: all 1.3s;
  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 100%;
  box-shadow: 0 0 1.5rem 0.5rem #0001;
  justify-self: end;
  border-radius: 0.5rem;
  @media (max-width: 900px) {
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    justify-self: start;
  }
  @media (max-width: 480px) {
    width: 25rem;
    height: 25rem;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  @media (max-width: 900px) {
    align-items: center;
    width: 80%;
  }
  @media (max-width: 480px) {
    align-items: center;
    width: 100%;
  }
`;
const AboutMe = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--navTextHover);
  text-transform: uppercase;
`;
const AboutText = styled.span`
  font-size: 2.4rem;
  color: var(--Text);
  @media (max-width: 900px) {
    display: none;
  }
`;
const AboutTextMobile = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const Span = styled.span`
  font-size: 2.4rem;
  color: var(--Text);
  @media (max-width: 385px) {
    font-size: 2.36rem;
  }
`;
const AboutDes = styled.p`
  font-size: 1.6rem;
  color: var(--lessText);
  margin-top: 1rem;
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;
export default function About({ inView }) {
  const [animation, setAnimation] = useState(false);
  const [check, setCheck] = useState(true);

  const { dispatch, state, aboutRef, homeInView } = useContext(Context);

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
        <Box>
          <AboutText type="desktop">
            A passionate Front-End Developer based in Lagos, Nigeria.
          </AboutText>
          <AboutTextMobile>
            <Span>A passionate Front-End Developer</Span>
            <Span>based in Lagos Nigeria.</Span>
          </AboutTextMobile>
          <AboutDes>
            Lorem ipsum dolor sit, adipisicing elit. Omnis, libero, cum vel
            minus debitis, tempora nobis asperiores magni quam quaerat
            temporibus tenetur exercitationem iste nemo. debitis, tempora nobis
            asperiores magni quam quaerat temporibus tenetur exercitationem iste
            nemo. exercitationem iste nemo. debitis tempora nobis asperiores
            magni quam quaerat temporibus tenetur exercitationem iste nemo.
            nemo. exercitationem iste nemo. debitis tempora nobis asperiores
            magni quam quaerat temporibus tenetur exercitationem iste nemo.
          </AboutDes>
        </Box>
      </DesBox>
    </AboutBox>
  );
}
