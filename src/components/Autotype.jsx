import { TypeAnimation } from "react-type-animation";

export default function Autotype() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Hi, I'm alberto Dom. A front-end react developer based in spain.",
          2000,
          "I'm very passionate about frondend and always ready to learn!",
          2000,
          "Always ready to improve my skills and work with great minds.",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2.3rem", display: "inline-block" }}
        repeat={Infinity}
      />
    </>
  );
}
