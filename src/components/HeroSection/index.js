import React from 'react'
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Img, ResumeButton, Span, SubTitle, TextLoop, Title } from './HeroSectionStyledComponent'
import HeroBgAnimation from '../HeroBgAnimation'
import { Bio } from '../../data/constants';
import HeroImg from '../../images/profile.jpeg'
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div id='about'>
      <HeroContainer>
          <HeroBg>
              <HeroBgAnimation/>
          </HeroBg>
          <HeroInnerContainer>
            <HeroLeftContainer>
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
            <Img src={HeroImg} alt="hero-image" />
            </HeroRightContainer>
          </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection