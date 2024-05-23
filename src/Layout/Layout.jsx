import styled from "styled-components";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import MenuBar from "../components/MenuBar";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../App";
import About from "../components/About";
import Project from "../components/Project";
import Notify from "../components/Notify";
import Footer from "../components/Footer";

const LayoutStyle = styled.div`
  width: 99.3vw;
  position: relative;
  background: (--background1);
  display: flex;
  flex-direction: column;
`;
const HomeStyle = styled.div`
  height: 100vh;
  position: relative;
  background-image: url("/backimage.jpg");
  background-size: cover;
  @media (max-width: 900px) {
    height: fit-content;
  }
  @media (max-width: 600px) {
    background-position: 30% 30%;
  }
`;
const NavStyle = styled.div`
  width: 99.3vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
`;
const Design1 = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid var(--border);
  position: absolute;
  top: 15%;
  left: 45%;
  border-radius: 50%;
  @media (max-width: 900px) {
    top: 15%;
    left: 15%;
    border: 2px solid var(--background);
  }
`;
const Design3 = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid var(--navTextHover);
  position: absolute;
  top: 5%;
  left: 30%;
`;
const Design5 = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid var(--navTextHover);
  position: absolute;
  top: 90%;
  right: 30%;
  border-radius: 50%;
`;
const Design6 = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid var(--text);
  position: absolute;
  top: 50%;
  left: 10%;
  border-radius: 50%;
`;
const Design7 = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid var(--background);
  position: absolute;
  top: 80%;
  right: 15%;
  @media (max-width: 500px) {
    right: 5%;
  }
`;
const Design8 = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid none;
  position: absolute;
  top: 5%;
  right: 40%;
  border-radius: 50%;
`;
const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s;
  z-index: 100;
  backdrop-filter: blur(5px);
`;
const AboutStyle = styled.div`
  width: 99.3vw;
  padding: 17rem 0 20rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 12rem 0 21rem 0;
  }
`;
const ProjectStyles = styled.div`
  width: 99.3vw;
  padding: 8rem 0 2rem 0;
  gap: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProjectDesbox = styled.div`
  flex-direction: column;
  display: flex;
  align-items: start;
  width: 100%;
  gap: 0.7rem;
  margin-bottom: -3rem;
  padding: 0 7%;
`;
const AboutMe = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--navTextHover);
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
const AboutText = styled.span`
  font-size: 2rem;
  color: var(--Text);
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
const NofifyBox = styled.div`
  position: fixed;
  top: 12%;
  right: 5%;
  z-index: 10000;
  transition: all 0.4s;
  @media (max-width: 500px) {
    right: 22%;
  }
`;
const Logo = styled.img`
  width: 9rem;
`;
const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--text);
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const FooterStyle = styled.div`
  width: 99.3vw;
  padding: 30em 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 5rem;
  background: linear-gradient(#fff 25%, var(--footerbackground));
`;
function Layout() {
  const {
    openMenu,
    aboutInVeiw,
    projectRef,
    projectInView,
    homeInView,
    notify,
    contactInView,
    contactRef,
  } = useContext(Context);
  let homeId = useRef();
  let aboutId = useRef();
  let projectId = useRef();
  let contactId = useRef();

  useEffect(() => {
    projectId.current = document.getElementById("Project");
    // const light = sportlight.current;
    // light.addEventListener("mousemove", (e) => {
    //   light.style.setProperty("--x", e.clientX + "px");
    //   light.style.setProperty("--y", e.clientY + "px");
    // });
  });
  return (
    <LayoutStyle>
      <NofifyBox className={notify ? "visible" : "hide"}>
        <Notify notify={notify} />
      </NofifyBox>
      <NavStyle>
        <Navigation
          aboutId={aboutId}
          projectId={projectId}
          homeId={homeId}
          contactId={contactId}
        />
      </NavStyle>
      <HomeStyle ref={homeId}>
        <Home inView={homeInView} />
        <Design1></Design1>
      </HomeStyle>
      <MenuBox className={openMenu ? "activeMenu" : "inactiveMenu"}>
        <MenuBar
          aboutId={aboutId}
          projectId={projectId}
          homeId={homeId}
          contactId={contactId}
        />
      </MenuBox>
      <AboutStyle ref={aboutId}>
        <About inView={aboutInVeiw} />
        <Design3></Design3>
        <Design5></Design5>
      </AboutStyle>
      <ProjectStyles id="Project">
        <ProjectDesbox ref={projectRef}>
          <AboutMe>Portfolio</AboutMe>
          <AboutText>Each piece is uniquely made</AboutText>
        </ProjectDesbox>
        <Project inView={projectInView} first={true} />
        <Project inView={projectInView} second={true} />
      </ProjectStyles>
      <FooterStyle ref={contactId}>
        <LogoStyle>
          <Logo src="/portfolioLogo.png" alt="logo" />
          <Text>Dom.Dev</Text>
        </LogoStyle>
        <Footer inView={contactInView} />
        <Design6></Design6>
        <Design7></Design7>
        <Design8 ref={contactRef}></Design8>
      </FooterStyle>
    </LayoutStyle>
  );
}

export default Layout;
