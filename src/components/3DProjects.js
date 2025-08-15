import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, RoundedBox } from '@react-three/drei';

// Project Card Component
function ProjectCard({ project, position, onHover, onSelect }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.1 + position[1];
    }
  });

  const handleHover = (isHovered) => {
    setHovered(isHovered);
    if (onHover) onHover(project, isHovered);
  };

  const handleClick = () => {
    setSelected(!selected);
    if (onSelect) onSelect(project, !selected);
  };

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
      <group position={position}>
        {/* Project Card */}
        <RoundedBox
          ref={meshRef}
          args={[3, 2, 0.2]}
          radius={0.1}
          onPointerOver={() => handleHover(true)}
          onPointerOut={() => handleHover(false)}
          onClick={handleClick}
          scale={hovered ? 1.1 : selected ? 1.05 : 1}
        >
          <meshStandardMaterial 
            color={selected ? '#76ABAE' : hovered ? '#EEEEEE' : '#31363F'} 
            metalness={0.2}
            roughness={0.6}
            emissive={selected ? '#76ABAE' : '#000000'}
            emissiveIntensity={selected ? 0.2 : 0}
          />
        </RoundedBox>
        
        {/* Project Title */}
        <Text
          position={[0, 0.5, 0.15]}
          fontSize={0.2}
          color={hovered || selected ? '#EEEEEE' : '#76ABAE'}
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          textAlign="center"
        >
          {project.title}
        </Text>
        
        {/* Project Category */}
        <Text
          position={[0, 0.2, 0.15]}
          fontSize={0.15}
          color="#94B4C1"
          anchorX="center"
          anchorY="middle"
        >
          {project.category.toUpperCase()}
        </Text>
        
        {/* Project Status */}
        <Text
          position={[0, -0.1, 0.15]}
          fontSize={0.12}
          color={project.status === 'Completed' ? '#47A248' : '#FF9900'}
          anchorX="center"
          anchorY="middle"
        >
          {project.status}
        </Text>
        
        {/* Technology Tags */}
        <group position={[0, -0.5, 0.15]}>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Text
              key={index}
              position={[(index - 1) * 0.8, 0, 0]}
              fontSize={0.1}
              color="#76ABAE"
              anchorX="center"
              anchorY="middle"
            >
              {tech}
            </Text>
          ))}
        </group>
      </group>
    </Float>
  );
}

// Floating Technology Icons
function TechIcon({ tech, position, color }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.2 + position[1];
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.4}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

// 3D Projects Scene
function ProjectsScene({ onProjectHover, onProjectSelect }) {
  const projects = [
    { 
      title: 'News App', 
      category: 'Frontend', 
      status: 'Completed',
      technologies: ['React', 'JavaScript', 'HTML/CSS'],
      position: [-6, 0, 0]
    },
    { 
      title: 'Counter App', 
      category: 'Frontend', 
      status: 'Completed',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      position: [-2, 0, 0]
    },
    { 
      title: 'Trade App', 
      category: 'Frontend', 
      status: 'Completed',
      technologies: ['TypeScript', 'React', 'Chart.js'],
      position: [2, 0, 0]
    },
    { 
      title: 'Microservices', 
      category: 'Backend', 
      status: 'Completed',
      technologies: ['NestJS', 'TypeScript', 'Redis'],
      position: [6, 0, 0]
    },
    { 
      title: 'API Gateway', 
      category: 'Backend', 
      status: 'Completed',
      technologies: ['Node.js', 'Express', 'JWT'],
      position: [-4, -3, 0]
    },
    { 
      title: 'CI/CD Pipeline', 
      category: 'DevOps', 
      status: 'Completed',
      technologies: ['GitHub Actions', 'Docker', 'K8s'],
      position: [0, -3, 0]
    },
    { 
      title: 'Event-Driven', 
      category: 'Architecture', 
      status: 'Completed',
      technologies: ['Kafka', 'Redis', 'WebSocket'],
      position: [4, -3, 0]
    }
  ];

  const techIcons = [
    { tech: 'React', color: '#61DAFB', position: [-8, 4, 0] },
    { tech: 'Node', color: '#339933', position: [8, 4, 0] },
    { tech: 'TypeScript', color: '#3178C6', position: [0, 6, 0] },
    { tech: 'Docker', color: '#2496ED', position: [-6, 6, 0] },
    { tech: 'AWS', color: '#FF9900', position: [6, 6, 0] }
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#76ABAE" />
      
      {/* Title */}
      <Text
        position={[0, 8, 0]}
        fontSize={1.5}
        color="#EEEEEE"
        anchorX="center"
        anchorY="middle"
      >
        PROJECTS GALLERY
      </Text>
      
      {/* Project Cards */}
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          position={project.position}
          onHover={onProjectHover}
          onSelect={onProjectSelect}
        />
      ))}
      
      {/* Technology Icons */}
      {techIcons.map((tech, index) => (
        <TechIcon
          key={index}
          tech={tech.tech}
          position={tech.position}
          color={tech.color}
        />
      ))}
      
      {/* Central Hub */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#76ABAE" 
          metalness={0.5}
          roughness={0.3}
          emissive="#76ABAE"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Category Labels */}
      <Text position={[-8, 2, 0]} fontSize={0.3} color="#94B4C1" anchorX="center">
        FRONTEND
      </Text>
      <Text position={[8, 2, 0]} fontSize={0.3} color="#94B4C1" anchorX="center">
        BACKEND
      </Text>
      <Text position={[0, 2, 8]} fontSize={0.3} color="#94B4C1" anchorX="center">
        DEVOPS
      </Text>
      <Text position={[0, 2, -8]} fontSize={0.3} color="#94B4C1" anchorX="center">
        ARCHITECTURE
      </Text>
    </>
  );
}

// Main 3D Projects Component
const ThreeDProjects = ({ onProjectHover, onProjectSelect }) => {
  return (
    <div className="h-screen w-full">
      <Canvas
        shadows
        camera={{ position: [0, 8, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ProjectsScene onProjectHover={onProjectHover} onProjectSelect={onProjectSelect} />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={10}
          maxDistance={30}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDProjects;
