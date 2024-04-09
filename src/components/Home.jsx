import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import Autotype from "./Autotype";
import { FaQuoteLeft } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../App";

const HomeCon = styled.div`
  display: flex;
  width: 99.3vw;
  align-items: center;
  gap: 5rem;
  padding: 21rem 5rem 0 12rem;
  @media (max-width: 930px) {
    gap: 2rem;
    padding: 19rem 3rem 0 9rem;
  }
  @media (max-width: 785px) {
    gap: 1rem;
    padding: 19rem 3rem 0 5rem;
  }
  @media (max-width: 660px) {
    gap: 1.5rem;
    padding: 19rem 2rem 0 2rem;
  }
  @media (max-width: 610px) {
    justify-content: center;
    padding: 12.5rem 0 0 0;
  }
`;
const Text = styled.h1`
  color: var(--text);
  font-size: 5rem;
  @media (max-width: 865px) {
    font-size: 4rem;
  }
  @media (max-width: 600px) {
    font-size: 5.5rem;
  }
  @media (max-width: 610px) {
    font-size: 5rem;
  }
  @media (max-width: 410px) {
    font-size: 4.6rem;
  }
`;
const ImgSec = styled.div`
  display: flex;
  width: 45%;
  @media (max-width: 610px) {
    display: none;
  }
`;
const ImgBox = styled.div`
  border: 3px solid var(--border);
  border-radius: 1rem;
  width: 90%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 2rem;
  align-items: end;
  font-size: 1.6rem;
  @media (max-width: 840px) {
    width: 100%;
  }
`;
const TextDes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 55%;
  @media (max-width: 610px) {
    align-items: center;
  }
  @media (max-width: 610px) {
    width: 90vw;
  }
`;
const Subtext = styled.div`
  font-size: 1.75rem;
  color: var(--lessText);
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 610px) {
    font-size: 2rem;
  }
  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
  @media (max-width: 375px) {
    font-size: 1.7rem;
  }
`;
const SubStacktext = styled.div`
  color: var(--Text);
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  gap: 1rem;
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const DesktopImg = styled.img`
  width: 25rem;
  height: 23rem;
  border-top: 2px solid var(--navTextHover);
  border-right: 2px solid var(--navTextHover);
  border-radius: 50%;
  display: none;
  @media (max-width: 610px) {
    display: inline-block;
  }
`;
const Techbox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 15rem;
  padding-left: 12rem;
  width: fit-content;
  @media (max-width: 930px) {
    gap: 2rem;
    padding-left: 9rem;
  }
  @media (max-width: 785px) {
    gap: 1.5rem;
    padding-left: 5rem;
  }
  @media (max-width: 660px) {
    gap: 1rem;
    padding-left: 2rem;
  }
  @media (max-width: 610px) {
    width: fit-content;
    margin: 5rem auto;
  }
  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
const AutoWidth = styled.div`
  width: 60%;
`;
const AutoWidthmobile = styled.div`
  width: 60%;
  height: 12vh;
  display: none;
  @media (max-width: 600px) {
    display: inline-block;
  }
  @media (max-width: 610px) {
    display: inline-block;
    width: 70%;
  }
  @media (max-width: 550px) {
    display: inline-block;
    width: 75%;
  }
  @media (max-width: 525px) {
    display: inline-block;
    width: 80%;
  }
  @media (max-width: 450px) {
    display: inline-block;
    width: 90%;
  }
  @media (max-width: 375px) {
    display: inline-block;
    width: 80%;
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

// const SpanText = styled.span`
//   color: var(--navTextHover);
//   @media (max-width: 785px) {
//     color: var(--text);
//   }
//   @media (max-width: 610px) {
//     color: var(--text);
//   }
// `;
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
const Quotestyle = {
  fontSize: "2.7rem",
  alignSelf: "center",
  marginLeft: "-7rem",
  paddingTop: "1rem",
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
          <DesktopImg src="/dom.png" />
          <Text ref={homeRef}>
            Front-End React <br />
            Developer <MdOutlineWavingHand style={iconstyles} />
          </Text>
          <Subtext>
            Hi, I'm Edem Dominic. A front-end react
            <br /> developer based in Nigeria
          </Subtext>
          <AutoWidthmobile>
            <Autotype mobile={true} />
          </AutoWidthmobile>
          <Socials>
            <FaLinkedin
              style={faLinkedin ? iconstylehover : iconstyle}
              onClick={() =>
                window.open(import.meta.env.VITE_MYLINKEDIN, "blank")
              }
              onMouseEnter={() => setFaLinkedin(true)}
              onMouseLeave={() => setFaLinkedin(false)}
            />
            <IoLogoGithub
              style={ioLogoGithub ? iconstylehover : iconstyle}
              onClick={() =>
                window.open(import.meta.env.VITE_MYGITHUB, "blank")
              }
              onMouseEnter={() => setIoLogoGithub(true)}
              onMouseLeave={() => setIoLogoGithub(false)}
            />
          </Socials>
        </TextDes>
        <ImgSec>
          <ImgBox>
            <FaQuoteLeft style={Quotestyle} />
            <AutoWidth>
              <Autotype />
            </AutoWidth>
          </ImgBox>
        </ImgSec>
      </HomeCon>
      <Techbox>
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
    </>
  );
}
