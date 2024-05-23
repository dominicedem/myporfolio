import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../App";

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 60rem;
`;

const TextBox = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.span`
  font-size: 2rem;
  color: var(--Text);
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;
const SocialBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;
const Social = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Tech = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--lessText);
`;
const iconstyle = {
  fontSize: "2rem",
  cursor: "pointer",
  color: "var(--background)",
};
function Footer({ inView }) {
  const { dispatch, state, projectInView } = useContext(Context);
  inView &&
    !projectInView &&
    !state.contactsActive &&
    dispatch({ type: "Contacts", payload: true });
  return (
    <FooterStyle>
      <TextBox>
        <Text>Learning, coding, music lover and staying up to</Text>
        <Text> date with modern technologies</Text>
      </TextBox>
      <SocialBox>
        <Social>
          {" "}
          <FaXTwitter style={iconstyle} />
        </Social>
        <Social>
          <FaInstagram style={iconstyle} />
        </Social>
        <Social>
          <FaWhatsapp style={iconstyle} />
        </Social>
        <Social>
          <FaLinkedin style={iconstyle} />
        </Social>
        <Social>
          <FaFacebookF style={iconstyle} />
        </Social>
      </SocialBox>
      <Tech>Made with: React, styled-component</Tech>
    </FooterStyle>
  );
}

export default Footer;
