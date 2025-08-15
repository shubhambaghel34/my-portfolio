import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, Line } from '@react-three/drei';

// Skill Sphere Component
function SkillSphere({ skill, position, onHover, onSelect }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.1 + position[1];
    }
  });

  const handleHover = (isHovered) => {
    setHovered(isHovered);
    if (onHover) onHover(skill, isHovered);
  };

  const handleClick = () => {
    setSelected(!selected);
    if (onSelect) onSelect(skill, !selected);
  };

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => handleHover(true)}
          onPointerOut={() => handleHover(false)}
          onClick={handleClick}
          scale={hovered ? 1.3 : selected ? 1.2 : 1}
        >
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color={selected ? '#76ABAE' : hovered ? '#EEEEEE' : skill.color} 
            metalness={0.3}
            roughness={0.4}
            emissive={selected ? '#76ABAE' : '#000000'}
            emissiveIntensity={selected ? 0.3 : 0}
          />
        </mesh>
        
        {/* Skill Name */}
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color={hovered || selected ? '#EEEEEE' : '#76ABAE'}
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
          textAlign="center"
        >
          {skill.name}
        </Text>
        
        {/* Skill Level */}
        <Text
          position={[0, -1.8, 0]}
          fontSize={0.2}
          color="#94B4C1"
          anchorX="center"
          anchorY="middle"
        >
          {skill.level}%
        </Text>
      </group>
    </Float>
  );
}

// Connection Line Component
function ConnectionLine({ start, end, color = '#76ABAE' }) {
  const points = [start, end];
  
  return (
    <Line
      points={points}
      color={color}
      lineWidth={1}
      dashed={false}
      transparent
      opacity={0.6}
    />
  );
}

// 3D Skills Scene
function SkillsScene({ onSkillHover, onSkillSelect }) {
  const skills = [
    { name: 'React.js', level: 95, color: '#61DAFB', category: 'Frontend', position: [-4, 0, 0] },
    { name: 'Node.js', level: 93, color: '#339933', category: 'Backend', position: [4, 0, 0] },
    { name: 'TypeScript', level: 90, color: '#3178C6', category: 'Frontend', position: [0, 0, 4] },
    { name: 'NestJS', level: 90, color: '#E0234E', category: 'Backend', position: [0, 0, -4] },
    { name: 'AWS', level: 88, color: '#FF9900', category: 'Cloud', position: [-3, 2, 3] },
    { name: 'Docker', level: 85, color: '#2496ED', category: 'DevOps', position: [3, 2, 3] },
    { name: 'MongoDB', level: 90, color: '#47A248', category: 'Database', position: [-3, 2, -3] },
    { name: 'Redis', level: 88, color: '#DC382D', category: 'Database', position: [3, 2, -3] },
    { name: 'GraphQL', level: 85, color: '#E10098', category: 'Backend', position: [0, 4, 0] },
    { name: 'Kubernetes', level: 80, color: '#326CE5', category: 'DevOps', position: [0, -2, 0] }
  ];

  const connections = [
    { start: [-4, 0, 0], end: [4, 0, 0] }, // React to Node
    { start: [4, 0, 0], end: [0, 0, 4] },  // Node to TypeScript
    { start: [0, 0, 4], end: [0, 0, -4] }, // TypeScript to NestJS
    { start: [0, 0, -4], end: [-4, 0, 0] }, // NestJS to React
    { start: [-4, 0, 0], end: [-3, 2, 3] }, // React to AWS
    { start: [4, 0, 0], end: [3, 2, 3] },  // Node to Docker
    { start: [0, 0, -4], end: [-3, 2, -3] }, // NestJS to MongoDB
    { start: [0, 0, 4], end: [3, 2, -3] },  // TypeScript to Redis
    { start: [0, 4, 0], end: [4, 0, 0] },  // GraphQL to Node
    { start: [0, -2, 0], end: [0, 0, 4] }   // Kubernetes to TypeScript
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#76ABAE" />
      
      {/* Title */}
      <Text
        position={[0, 6, 0]}
        fontSize={1.5}
        color="#EEEEEE"
        anchorX="center"
        anchorY="middle"
      >
        SKILLS & EXPERTISE
      </Text>
      
      {/* Skill Spheres */}
      {skills.map((skill, index) => (
        <SkillSphere
          key={index}
          skill={skill}
          position={skill.position}
          onHover={onSkillHover}
          onSelect={onSkillSelect}
        />
      ))}
      
      {/* Connection Lines */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={index}
          start={connection.start}
          end={connection.end}
        />
      ))}
      
      {/* Central Hub */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#76ABAE" 
          metalness={0.5}
          roughness={0.3}
          emissive="#76ABAE"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Category Labels */}
      <Text position={[-6, 4, 0]} fontSize={0.4} color="#94B4C1" anchorX="center">
        FRONTEND
      </Text>
      <Text position={[6, 4, 0]} fontSize={0.4} color="#94B4C1" anchorX="center">
        BACKEND
      </Text>
      <Text position={[0, 4, 6]} fontSize={0.4} color="#94B4C1" anchorX="center">
        CLOUD
      </Text>
      <Text position={[0, 4, -6]} fontSize={0.4} color="#94B4C1" anchorX="center">
        DEVOPS
      </Text>
    </>
  );
}

// Main 3D Skills Component
const ThreeDSkills = ({ onSkillHover, onSkillSelect }) => {
  return (
    <div className="h-screen w-full">
      <Canvas
        shadows
        camera={{ position: [0, 8, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <SkillsScene onSkillHover={onSkillHover} onSkillSelect={onSkillSelect} />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={8}
          maxDistance={25}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDSkills;
