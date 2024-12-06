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
import Header from './header/header';
import background_mario from './assets/background_mario.jpg'

import Second from './header/Second';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Environment,useGLTF}from "@react-three/drei"
gsap.registerPlugin(ScrollTrigger);
const CameraWithState = ({mario_ref}) => {
  const { camera } = useThree();
  const [section, setSection] = useState(0);
  let target;
  useEffect(() => {
    // ScrollTrigger로 상태 변경
    ScrollTrigger.create({
      trigger: ".section_1",
      start: "top center",
      end: "bottom center",
      markers:true,
      onEnter: () => setSection(1),
      onEnterBack: () => setSection(1),
    });

    ScrollTrigger.create({
      trigger: ".section_2",
      start: "top center",
      end: "bottom center",
      markers:true,
      onEnter: () => setSection(2),
      onEnterBack: () => setSection(2),
    });
    ScrollTrigger.create({
      trigger: ".section_3",
      start: "top center",
      end: "bottom center",
      markers:true,
      onEnter: () => setSection(3),
      onEnterBack: () => setSection(3),
    });

 
  }, []);

  useEffect(() => {
    // 상태에 따라 카메라 애니메이션
  
    if (section === 1) {
    
         mario_ref.current.style.top="0%"
      gsap.to(camera.position, { x: 0.4, y: 5.32, z: 11.17, duration: 1 });
      target = new THREE.Vector3(-0.3, 4.77, -0.6);
   
    } else if (section === 2) {
      mario_ref.current.style.top="100%"
      gsap.to(camera.position, { x: 11.58, y: 5.7, z: 0.63, duration: 1 });
      target = new THREE.Vector3(-0.3, 4.67, 0.03);
     
    } else if (section === 3) {
      mario_ref.current.style.top="200%"
      gsap.to(camera.position, { x: 0.018, y: 2.6, z: -12.89, duration: 1 });
      target = new THREE.Vector3(-0.3, 3.77, -0.6);
  }

    if (target) {
      gsap.to(camera.position, { duration: 1, onUpdate: () => camera.lookAt(target) });
    }


  }, [section, camera]);

  return null;
};
const styles = {
  container: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
   
  },
  section: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
  
  },
};

gsap.registerPlugin(ScrollTrigger);
const FullpageScroll = () => {
 

  useEffect(() => {
  let sections=  gsap.utils.toArray("[class^='section_']");

    gsap.to(sections, {
      ease: "none", // 부드럽게 이동
      scrollTrigger: {
        trigger: "section",
        markers: true,
         // 전체 컨테이너
        pin: true, // 스크롤 중 컨테이너 고정
        scrub: true, // 스크롤과 애니메이션 동기화
        snap: 1 / (sections.length - 1), // 섹션에 "스냅" 효과
        end: () => `+=${window.innerHeight * (sections.length - 1)}`, // 끝 지점 설정
      },
    });
  }, []);

  return (
    <div  style={styles.container}>
      <div className="section_1" style={{
 
        backgroundSize:'cover'
      }}>
      <Header></Header>
      </div>
      <div className="section_2" style={{ ...styles.section,  }}>
    <Second></Second>
      </div>
      <div className="section_3" style={{ ...styles.section,  }}>
     
      </div>
    </div>
  );
};

//gsap 두개넣을까 ㅋ .. 우선 대충 넣고 보기

export function Model(props) {
  const { nodes, materials } = useGLTF('/untitled.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI /2, 0, 0]} position={[0,0,0]} scale={0.05}>
        <skinnedMesh
          geometry={nodes.Eyeball__MarioEyeMat00.geometry}
          material={materials['MarioEyeMat00.002']}
          skeleton={nodes.Eyeball__MarioEyeMat00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Face02__MarioFaceMat00.geometry}
          material={materials['Material.002']}
          skeleton={nodes.Face02__MarioFaceMat00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Face03__MarioHigeMat00.geometry}
          material={materials['MarioHigeMat00.002']}
          skeleton={nodes.Face03__MarioHigeMat00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.HandL06__MarioHandMat00.geometry}
          material={materials['MarioHandMat00.004']}
          skeleton={nodes.HandL06__MarioHandMat00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.HandR04__MarioHandMat00.geometry}
          material={materials['MarioHandMat00.005']}
          skeleton={nodes.HandR04__MarioHandMat00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mario__MarioBodyMat00.geometry}
          material={materials['MarioBodyMat00.002']}
          skeleton={nodes.Mario__MarioBodyMat00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mario__MarioBodyMat01.geometry}
          material={materials['MarioBodyMat01.002']}
          skeleton={nodes.Mario__MarioBodyMat01.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mario__MarioFaceMat00.geometry}
          material={materials['MarioFaceMat00.008']}
          skeleton={nodes.Mario__MarioFaceMat00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mario__MarioMetalMat00.geometry}
          material={materials['MarioMetalMat00.002']}
          skeleton={nodes.Mario__MarioMetalMat00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mario__MarioShoesMat00.geometry}
          material={materials['MarioShoesMat00.002']}
          skeleton={nodes.Mario__MarioShoesMat00.skeleton}
        />
        <primitive object={nodes.AllRoot} />
      </group>
    </group>
  )
}



function App() {
  useGLTF.preload('/untitled.glb')
  const mario_ref=useRef(null);

  return (
    <div  style={{
      backgroundImage:`url(${background_mario})`,
      backgroundSize:'cover',
      width:'100%',
      height:'300vh',
     
    }}>
     
      <div 
      ref={mario_ref}
      className='
absolute
 h-screen
 
    w-full
    z-2
'>

<Canvas orthographic camera={{ zoom: 200 }}>

  <Environment preset='studio'></Environment>

  <CameraWithState mario_ref={mario_ref}></CameraWithState>
  <Model></Model>
 
 
</Canvas>
</div>
<FullpageScroll></FullpageScroll>
    </div>





  );
}

export default App;
