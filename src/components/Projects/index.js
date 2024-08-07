import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import { projects } from '../../data/constants'
import ProjectCards from '../Cards/ProjectCards'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Automation projects to web apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
        <ToggleButton active={toggle === 'all'} value="all" onClick={() => setToggle('all')}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'web app'} value="web app" onClick={() => setToggle('web app')}>
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'QA'} value="QA" onClick={() => setToggle('QA')}>
          QA
          </ToggleButton>
          
         
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {toggle !== 'all' && projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects