import { useContext } from "react";
import { Context } from "../App";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { TbExternalLink } from "react-icons/tb";

const AboutBox = styled.div`
  display: flex;
  align-items: stretch;
  gap: 6rem;
  width: 85vw;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;
const DesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-right: 2rem;
  width: 70%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const AboutMe = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  color: var(--navTextHover);
  text-transform: uppercase;
  /* @media (max-width: 600px) {
    font-size: 2rem;
  } */
`;
const AboutDes = styled.p`
  font-size: 1.6rem;
  color: var(--lessText);
  margin-top: 1.5rem;
`;
const Tech = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1.3rem;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1.8rem;
`;
const Text = styled.p`
  font-size: 1.7rem;
  color: var(--navTextHover);
  font-weight: bold;
  /* @media (max-width: 600px) {
    font-size: var(--mobileLargeSize);
  } */
`;

const Texts = styled.p`
  display: flex;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: var(--mobileLargeSize);
  }
  gap: 0.1rem;
  color: var(--Text);
  font-weight: bold;
  cursor: pointer;
`;
const Video = styled.video`
  object-fit: fill;
  font-size: 1.5rem;
  color: var(--Text);
  font-weight: bold;
  cursor: pointer;
  width: 45%;
  box-shadow: 0 1rem 1rem 0.5rem #0001;
  border-radius: 1rem;
  @media (max-width: 900px) {
    box-shadow: 0 0.5rem 1rem 0.5rem #0001;
    width: 40rem;
    height: 30rem;
  }
  @media (max-width: 450px) {
    max-width: 35rem;
  }
`;
const Videos = styled.video`
  object-fit: fill;
  font-size: 1.5rem;
  color: var(--Text);
  font-weight: bold;
  cursor: pointer;
  width: 45%;
  box-shadow: 0 1rem 1rem 0.5rem #0001;
  border-radius: 1rem;
  @media (max-width: 900px) {
    box-shadow: 0 0.5rem 1rem 0.5rem #0001;
    width: 40rem;
    height: 30rem;
    order: -1;
  }
  @media (max-width: 450px) {
    max-width: 35rem;
  }
`;
const iconstyle = {
  fontSize: "2.6rem",
  cursor: "pointer",
  color: "var(--text)",
  transition: "all 0.3s",
};
const demostyle = {
  fontSize: "2.5rem",
  cursor: "pointer",
  color: "var(--text)",
  transition: "all 0.3s",
  marginTop: "-2.5px",
};
export default function Project({ inView, first, second }) {
  const { dispatch, state, aboutInVeiw, setNotify, projectRef } =
    useContext(Context);

  function activate() {
    setNotify(true);
    setTimeout(() => setNotify(false), 2100);
  }
  inView &&
    !aboutInVeiw &&
    !state.projectsActive &&
    dispatch({ type: "Projects", payload: true });

  return (
    <AboutBox>
      {first && (
        <>
          <Video
            src="/Crypdom.webm"
            type="video/webm"
            muted
            loop
            // autoPlay
            onClick={() =>
              window.open(import.meta.env.VITE_CRYPDOMLIVE, "blank")
            }
            onMouseEnter={(event) => event.target.play()}
            onMouseLeave={(event) => {
              event.target.pause();
              event.target.currentTime = 0;
            }}
          />
          <DesBox>
            <AboutMe>Crypdom</AboutMe>
            <AboutDes>
              Lorem ipsum dolor sit, adipisicing elit. Omnis, libero, minus
              debitis,Lorem ipsum dolor sit, adipisicing elit <br />
              tempora nobis asperiores magni quam quaerat exercitationem iste
              nemo. debitis, <br />
              tempora nobis asperiores magni quam quaerat temporibus tenetur
              exercitationem iste nemo. exercitationem iste nemo. debitis,{" "}
            </AboutDes>
            <Tech>
              <Text>React</Text>
              <Text>Styled-component</Text>
            </Tech>
            <Content>
              <Texts
                onClick={() =>
                  window.open(import.meta.env.VITE_CRYPDOM, "blank")
                }
              >
                Code
                <IoLogoGithub style={iconstyle} />
              </Texts>
              <Texts
                onClick={() =>
                  window.open(import.meta.env.VITE_CRYPDOMLIVE, "blank")
                }
              >
                Live demo <TbExternalLink style={demostyle} />
              </Texts>
            </Content>
          </DesBox>
        </>
      )}
      {second && (
        <>
          <DesBox>
            <AboutMe ref={projectRef}>E-Commerce</AboutMe>
            <AboutDes>
              Lorem ipsum dolor sit, adipisicing elit. Omnis, libero, cum vel
              minus debitis, dolor sit, adipisicing elit. Omjyvjkbjk
              <br />
              minus debitis, dolor sit, adipisicing elit. Omjyvjkbjk minus
              debitis, dolor sit, adipisicing elit. Omjyvjkbjk
              <br />
              Lorem ipsum dolor sit, adipisicing elit. Omnis, libero. Lorem
              ipsum dolor sit, adipisicing elit. Omnis, libero. Lorem ipsum
              dolor sit, adipisicing elit. Omnis, libero.
            </AboutDes>
            <Tech>
              <Text>React</Text>
              <Text>Styled-component</Text>
            </Tech>
            <Content>
              <Texts
                onClick={() =>
                  window.open(import.meta.env.VITE_MYGITHUB, "blank")
                }
              >
                Code
                <IoLogoGithub style={iconstyle} />
              </Texts>
              <Texts onClick={() => activate()}>
                Live demo <TbExternalLink style={demostyle} />
              </Texts>
            </Content>
          </DesBox>
          <Videos
            src="/clip.mp4"
            type="video/mp4"
            muted
            loop
            // autoPlay
            onMouseEnter={(event) => event.target.play()}
            onMouseLeave={(event) => {
              event.target.pause();
              event.target.currentTime = 0;
            }}
          />
        </>
      )}
    </AboutBox>
  );
}
