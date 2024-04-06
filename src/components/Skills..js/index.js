import React from 'react'
import {skills} from "../../data/constants"
import { Container, Skill, SkillImage, SkillItem, SkillList, SkillTitle, SkillsContainer, Title, Wrapper } from './SkillsStylesConponent';

const Skills = () => {
  return (
    <Container id='skills'>
      
      <Wrapper>
        <Title>
          Skills
        </Title>
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