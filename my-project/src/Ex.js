import logo from './logo.svg';
import './App.css';
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Environment}from "@react-three/drei"
gsap.registerPlugin(ScrollTrigger);
const CameraWithState = () => {
  const { camera } = useThree();
  const [section, setSection] = useState(0);
  let target;
  useEffect(() => {
    // ScrollTrigger로 상태 변경
    ScrollTrigger.create({
      trigger: ".section1",
      start: "top center",
      end: "bottom center",
      markers:true,
      onEnter: () => setSection(1),
      onEnterBack: () => setSection(1),
    });

    ScrollTrigger.create({
      trigger: ".section2",
      start: "top center",
      end: "bottom center",
      markers:true,
      onEnter: () => setSection(2),
      onEnterBack: () => setSection(2),
    });

 
  }, []);

  useEffect(() => {
    // 상태에 따라 카메라 애니메이션
  
    if (section === 1) {
      console.log(1)
     
      gsap.to(camera.position, { x: 0.4, y: 5.32, z: 11.17, duration: 1 });
      target = new THREE.Vector3(-0.3, 2.77, -0.6);
   
    } else if (section === 2) {
      gsap.to(camera.position, { x: 11.58, y: 5.7, z: 0.63, duration: 1 });
      target = new THREE.Vector3(-0.3, 4.67, 0.03);
     
    } else if (section === 3) {
      gsap.to(camera.position, { x: 0.018, y: 2.6, z: -12.89, duration: 1 });
      target = new THREE.Vector3(-0.3, 2.77, -0.6);
  }

    if (target) {
      gsap.to(camera.position, { duration: 1, onUpdate: () => camera.lookAt(target) });
    }


  }, [section, camera]);

  return null;
};

gsap.registerPlugin(ScrollTrigger);

const FullpageScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");

    gsap.to(sections, {
      yPercent: -100 * (sections.length - 1), // 섹션들을 한 페이지씩 위로 이동
      ease: "none", // 부드럽게 이동
      scrollTrigger: {
        trigger: containerRef.current, // 전체 컨테이너
        pin: true, // 스크롤 중 컨테이너 고정
        scrub: true, // 스크롤과 애니메이션 동기화
        snap: 1 / (sections.length - 1), // 섹션에 "스냅" 효과
        end: () => `+=${window.innerHeight * (sections.length - 1)}`, // 끝 지점 설정
      },
    });
  }, []);

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()

  const gltf = useLoader(GLTFLoader, '/mario.glb')
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => {
  //  
  //  meshRef.current.rotation.x += delta
  //
  //
  //
  //})
  // Return view, these are regular three.js elements expressed in JSX
  const scale = [2, 2, 2];
  return (
  <primitive  
  scale={scale} 
  object={gltf.scene} />
  )
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  section: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    color: "#fff",
  },
};



function App() {
  return (
    <div ref={containerRef} style={styles.container}>
    <div className="section" style={{ ...styles.section, backgroundColor: "#f39c12" }}>
      <h1>Section 1</h1>
    </div>
    <div className="section" style={{ ...styles.section, backgroundColor: "#3498db" }}>
      <h1>Section 2</h1>
    </div>
    <div className="section" style={{ ...styles.section, backgroundColor: "#2ecc71" }}>
      <h1>Section 3</h1>
    </div>
  </div>
  );
}

export default App;
