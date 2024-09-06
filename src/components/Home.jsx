import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import Autotype from "./Autotype";
// import { FaQuoteLeft } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../App";

const HomeCon = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 70% 30%;
  width: 99.3vw;
  height: 100%;
  column-gap: 1rem;
  padding: 0 5rem 0 5rem;
  align-items: end;
  @media (max-width: 1000px) {
    grid-template-columns: 68% 32%;
  }
  @media (max-width: 900px) {
    grid-template-rows: 40% 50% 10%;
    grid-template-columns: 1fr;
    padding-top: 10rem;
    padding-bottom: 4rem;
    row-gap: 1rem;
  }
  @media (max-width: 900px) {
    padding-bottom: 8rem;
    row-gap: 2rem;
  }
  @media (max-width: 460px) {
    padding: 10rem 0 8rem 0;
    row-gap: 2rem;
  }
`;
const Text = styled.h1`
  color: var(--text);
  font-size: 5rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
const TextDesMobile = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  margin-left: -8rem;
  border: 1.5px solid var(--border);
  height: 70%;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    width: 40%;
    grid-row: 1/2;
    justify-self: center;
    margin-left: 0;
    height: fit-content;
    border: none;
  }
  @media (max-width: 800px) {
    width: 28rem;
  }
  @media (max-width: 600px) {
    width: 25rem;
  }
  @media (max-width: 400px) {
    width: 23rem;
  }
`;
const TextDes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
  @media (max-width: 900px) {
    justify-self: center;
    align-items: center;
    width: 70%;
    align-self: start;
  }
  @media (max-width: 640px) {
    justify-self: center;
    align-items: center;
    width: 100%;
    align-self: start;
  }
`;
const HeadText = styled.h1`
  color: var(--text);
  font-size: 5rem;
`;
const SubStacktext = styled.div`
  color: var(--Text);
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  gap: 1rem;
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const DesktopImg = styled.img`
  height: 28rem;
  width: 30rem;
  object-fit: cover;
  aspect-ratio: 1/2;
  border-radius: 2rem;
  /* width: 100%; */
  margin-left: -5rem;
  @media (max-width: 900px) {
    margin-left: 0;
    width: 85%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Techbox = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: start;
  align-self: center;
  gap: 2rem;
  width: 100%;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: start;
    height: 100%;
  }
  @media (max-width: 510px) {
    gap: 1rem;
  }
`;
const AutoWidthmobile = styled.div`
  width: 70%;
  height: 12vh;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
const Stack = styled.img`
  width: 2.5rem;
`;
const Stacks = styled.img`
  width: 2.3rem;
`;
const Stackss = styled.img`
  width: 3.1rem;
`;
const Stacked = styled.img`
  height: 2.3rem;
  width: 2.6rem;
`;

const iconstyle = {
  fontSize: "2.7rem",
  cursor: "pointer",
  color: "#f3f3f3c8",
  transition: "all 0.3s",
};
const iconstylehover = {
  fontSize: "2.7rem",
  cursor: "pointer",
  color: "#c3c3c3c5",
  transition: "all 0.3s",
};
const iconstyles = {
  fontSize: "5rem",
  marginBottom: "-7px",
  color: "var(--text)",
};

export default function Home({ inView }) {
  const [faLinkedin, setFaLinkedin] = useState();
  const [ioLogoGithub, setIoLogoGithub] = useState();

  const { dispatch, state, homeRef } = useContext(Context);

  inView && !state.homeActive && dispatch({ type: "Home", payload: true });
  return (
    <>
      <HomeCon>
        <TextDes>
          <Text type="desktop" ref={homeRef}>
            Front-End React <br />
            Developer <MdOutlineWavingHand style={iconstyles} />
          </Text>
          <TextDesMobile type="mobile" ref={homeRef}>
            <HeadText>Front-End React</HeadText>
            <HeadText>
              Developer <MdOutlineWavingHand style={iconstyles} />
            </HeadText>
          </TextDesMobile>
          <AutoWidthmobile>
            <Autotype />
          </AutoWidthmobile>
          <Socials>
            <FaLinkedin
              style={faLinkedin ? iconstylehover : iconstyle}
              // onClick={() =>
              //   window.open(import.meta.env.VITE_MYLINKEDIN, "blank")
              // }
              onMouseEnter={() => setFaLinkedin(true)}
              onMouseLeave={() => setFaLinkedin(false)}
            />
            <IoLogoGithub
              style={ioLogoGithub ? iconstylehover : iconstyle}
              // onClick={() =>
              //   window.open(import.meta.env.VITE_MYGITHUB, "blank")
              // }
              onMouseEnter={() => setIoLogoGithub(true)}
              onMouseLeave={() => setIoLogoGithub(false)}
            />
          </Socials>
        </TextDes>
        <ImgBox>
          <DesktopImg src="/pics.jpeg" />
        </ImgBox>
        <Techbox ref={homeRef}>
          <SubStacktext>
            Tech stack <span style={{ marginTop: "-2px" }}>|</span>
          </SubStacktext>
          <Stacks src="htmllogo.png" />
          <Stackss src="csslogo.png" />
          <Stack src="js.png" />
          <Stack src="styledlogo.png" />
          <Stack src="reactlogo.png" />
          <Stack src="reduxlogo.png" />
          <Stacked src="tail.png" />
        </Techbox>
      </HomeCon>
    </>
  );
}
