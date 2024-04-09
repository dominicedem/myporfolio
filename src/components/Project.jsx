import { useContext } from "react";
import { Context } from "../App";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { TbExternalLink } from "react-icons/tb";

const AboutBox = styled.div`
  display: flex;
  align-items: stretch;
  gap: 6rem;
  max-width: 80rem;
  @media (max-width: 940px) {
    max-width: 70rem;
  }
  @media (max-width: 695px) {
    max-width: 62rem;
    gap: 2.8rem;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const DesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-right: 2rem;
  width: 55%;
  @media (max-width: 600px) {
    width: 70%;
  }
`;
// const ImgBox = styled.div`
//   display: flex;
//   justify-content: end;
//   width: 45%;
//   @media (max-width: 600px) {
//     display: none;
//   }
// `;
// const Img = styled.img`
//   width: 100%;
//   box-shadow: 0 1rem 1rem 0.5rem #0001;
//   justify-self: end;
//   border-radius: 0.5rem;
// `;
const AboutMe = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--navTextHover);
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
const AboutDes = styled.p`
  font-size: 1.4rem;
  color: var(--lessText);
  margin-top: 1.5rem;
  @media (max-width: 600px) {
    font-size: var(--mobileLargeSize);
  }
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
  font-size: 1.5rem;
  color: var(--navTextHover);
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: var(--mobileLargeSize);
  }
`;

const Texts = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
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
  @media (max-width: 600px) {
    display: none;
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
  const { dispatch, state, aboutInVeiw, setNotify } = useContext(Context);
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
          {/* <ImgBox>
            <Img src="/About.jpeg" />
          </ImgBox> */}
          <Video src="/clip.mp4" type="video/mp4" muted loop autoPlay />
          <DesBox>
            <AboutMe>Swift</AboutMe>
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
              <Texts>
                Code
                <IoLogoGithub
                  style={iconstyle}
                  onClick={() =>
                    window.open(import.meta.env.VITE_SONICSWAP, "blank")
                  }
                />
              </Texts>
              <Texts
                onClick={() =>
                  window.open(import.meta.env.VITE_SONICSWAPLIVE, "blank")
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
            <AboutMe>E-Commerce</AboutMe>
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
              <Texts>
                Code
                <IoLogoGithub
                  style={iconstyle}
                  onClick={() =>
                    window.open(import.meta.env.VITE_MYGITHUB, "blank")
                  }
                />
              </Texts>
              <Texts onClick={() => activate()}>
                Live demo <TbExternalLink style={demostyle} />
              </Texts>
            </Content>
          </DesBox>
          <Video
            src="/clip.mp4"
            type="video/mp4"
            muted
            loop
            autoPlay
            // onMouseEnter={(event) => event.target.play()}
            // onMouseLeave={(event) => {
            //   event.target.pause();
            //   event.target.currentTime = 0;
            // }}
          />
        </>
      )}
    </AboutBox>
  );
}
