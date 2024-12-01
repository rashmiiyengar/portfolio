import React from "react";
import { useNavigate } from "react-router-dom";
import { DemoContainer, ResumeButton } from "./DemoStyleComponent";
import { Avatar2 } from "../Avatar";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
const Demo = () => {
  const navigate = useNavigate();

  return (
    <DemoContainer>
      <ResumeButton onClick={() => navigate("/")}>Back to Home</ResumeButton>
      
      <Canvas camera={{ fov: 35, position: [0, 1,5 ] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Avatar2 position={[0,-3,5]} scale={2}/>
        <Environment preset="sunset"/>
      </Canvas>
    </DemoContainer>
    
  );
};

export default Demo;
