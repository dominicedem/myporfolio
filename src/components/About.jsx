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
  letter-spacing: 0.5px;
  line-height: 1.25;
  text-justify: distribute;
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
            A passionate Front-End Developer based in Lagos, Spain.
          </AboutText>
          <AboutTextMobile>
            <Span>A passionate Front-End Developer</Span>
            <Span>based in Lagos Spain.</Span>
          </AboutTextMobile>
          <AboutDes>
            I'm a passionate front-end developer with over 2 years of experience
            and a strong focus on building engaging and dynamic web applications
            using React. I have a keen interest in the world of web3 and
            blockchain technology, particularly on the Solana network. My
            journey in tech has been fueled by a desire to blend creativity with
            code, crafting seamless user experiences and pushing the boundaries
            of what's possible on the web. In addition to my expertise in
            front-end development, I'm constantly exploring new technologies and
            frameworks to stay ahead of the curve.
          </AboutDes>
        </Box>
      </DesBox>
    </AboutBox>
  );
}
