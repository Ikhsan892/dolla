import React, { useState } from "react";
import Video from "../../videos/back.jpg";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import { Button } from "../ButtonElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign Up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

// autoPlay loop muted type='video/mp4'
export default HeroSection;
