import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes.js";
import NavBar from "./components/NavBar/index.js";
import HeroSection from "./components/HeroSection/index.js";
import Skills from "./components/Skills..js/index.js";
import Education from "./components/Education/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience";
import Projects from "./components/Projects/index.js";
import { useState } from "react";
import ProjectDetails from "./components/ProjectDetails/index.js";
import Footer from "./components/Footer/index.js";
import PracticeHome from "./components/PracticePage/PracticeHome.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
        <Body>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />

                  <Wrapper>
                    <Skills />
                    <Experience />
                  </Wrapper>
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                  <Wrapper>
                    <Education />
                  </Wrapper>

                  <Footer />
                  {openModal.state && (
                    <ProjectDetails
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </>
              }
            />
          <Route path="/practice" element={<PracticeHome />} />
          </Routes>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
