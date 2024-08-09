import React from 'react'
import {skills} from "../../data/constants"
import { Container, HeroBg, Skill, SkillImage, SkillItem, SkillList, SkillTitle, SkillsContainer, Title, Wrapper } from './SkillsStylesConponent';
import HeroBgAnimation from '../HeroBgAnimation';

const Skills = () => {
  return (
    <Container id='skills'>
      <Wrapper>
        <Title>
          Skills
        </Title>
        <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
        <SkillsContainer>
       
          {skills.map((skill,index)=>(
            <Skill>
              
              <SkillTitle>
                {skill.title}
              </SkillTitle>
              <SkillList>
                {skill.skills.map((items,index)=>(
                  <SkillItem>
                    <SkillImage src={items.image}/>
                    {items.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills;