import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, TreePine, Waves } from 'lucide-react';

const IslandParadiseHome = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamic import of Three.js
    const initThreeJS = async () => {
      try {
        const THREE = await import('three');
        
                       // Scene setup - Night scene
               const scene = new THREE.Scene();
               scene.background = new THREE.Color(0x0B1426); // Dark night blue
               scene.fog = new THREE.Fog(0x0B1426, 10, 100);
               sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.set(0, 5, 15);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ 
          canvas: canvasRef.current,
          antialias: true,
          alpha: true 
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        rendererRef.current = renderer;

                       // Lighting - Moonlight and stars
               const ambientLight = new THREE.AmbientLight(0x1E3A8A, 0.3); // Dark blue ambient
               scene.add(ambientLight);
       
               const directionalLight = new THREE.DirectionalLight(0xE0E7FF, 0.8); // Soft moonlight
               directionalLight.position.set(5, 15, 5);
               directionalLight.castShadow = true;
               directionalLight.shadow.mapSize.width = 2048;
               directionalLight.shadow.mapSize.height = 2048;
               scene.add(directionalLight);
       
               // Add moonlight
               const moonLight = new THREE.PointLight(0xE0E7FF, 1.5, 40);
               moonLight.position.set(0, 25, 0);
               scene.add(moonLight);

                       // Create stars for night sky
               const starsGeometry = new THREE.BufferGeometry();
               const starsCount = 1000;
               const starsPositions = new Float32Array(starsCount * 3);
               const starsSizes = new Float32Array(starsCount);
       
               for (let i = 0; i < starsCount * 3; i += 3) {
                 starsPositions[i] = (Math.random() - 0.5) * 100;
                 starsPositions[i + 1] = Math.random() * 50 + 10;
                 starsPositions[i + 2] = (Math.random() - 0.5) * 100;
                 starsSizes[i / 3] = Math.random() * 3;
               }
       
               starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
               starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1));
       
               const starsMaterial = new THREE.PointsMaterial({
                 color: 0xE0E7FF,
                 size: 0.2,
                 transparent: true,
                 opacity: 0.9,
                 sizeAttenuation: true
               });
       
               const stars = new THREE.Points(starsGeometry, starsMaterial);
               scene.add(stars);

                       // Create island base
               const islandGeometry = new THREE.CylinderGeometry(8, 12, 2, 16);
               const islandMaterial = new THREE.MeshPhongMaterial({ 
                 color: 0x8B4513, // Sandy brown
                 transparent: true,
                 opacity: 0.9
               });
               
               const island = new THREE.Mesh(islandGeometry, islandMaterial);
               island.position.set(0, -1, 0);
               island.castShadow = true;
               island.receiveShadow = true;
               scene.add(island);
               
               // Create water around island - night version
               const waterGeometry = new THREE.PlaneGeometry(100, 100);
               const waterMaterial = new THREE.MeshPhongMaterial({ 
                 color: 0x1E3A8A, // Dark blue for night
                 transparent: true,
                 opacity: 0.7,
                 side: THREE.DoubleSide
               });
               
               const water = new THREE.Mesh(waterGeometry, waterMaterial);
               water.rotation.x = -Math.PI / 2;
               water.position.set(0, -2, 0);
               scene.add(water);

                       // Create house - night version with warm glow
               const houseGroup = new THREE.Group();
               
               // House body
               const houseBodyGeometry = new THREE.BoxGeometry(3, 2, 3);
               const houseBodyMaterial = new THREE.MeshPhongMaterial({ color: 0xFEF3C7 }); // Warm cream color
               const houseBody = new THREE.Mesh(houseBodyGeometry, houseBodyMaterial);
               houseBody.position.y = 1;
               houseBody.castShadow = true;
               houseGroup.add(houseBody);
       
               // House roof
               const roofGeometry = new THREE.ConeGeometry(2.5, 1.5, 4);
               const roofMaterial = new THREE.MeshPhongMaterial({ color: 0x92400E }); // Darker brown roof
               const roof = new THREE.Mesh(roofGeometry, roofMaterial);
               roof.position.y = 2.75;
               roof.rotation.y = Math.PI / 4;
               roof.castShadow = true;
               houseGroup.add(roof);
       
               // House door
               const doorGeometry = new THREE.BoxGeometry(0.8, 1.5, 0.1);
               const doorMaterial = new THREE.MeshPhongMaterial({ color: 0x92400E });
               const door = new THREE.Mesh(doorGeometry, doorMaterial);
               door.position.set(0, 0.75, 1.6);
               houseGroup.add(door);
       
               // House windows with warm glow
               const windowGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.1);
               const windowMaterial = new THREE.MeshPhongMaterial({ color: 0xFCD34D }); // Warm yellow glow
               
               const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
               leftWindow.position.set(-1, 1.2, 1.6);
               houseGroup.add(leftWindow);
               
               const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
               rightWindow.position.set(1, 1.2, 1.6);
               houseGroup.add(rightWindow);
       
               houseGroup.position.set(0, 0, 0);
               scene.add(houseGroup);

                       // Create trees - night version
               const trees = [];
               for (let i = 0; i < 8; i++) {
                 const treeGroup = new THREE.Group();
                 
                 // Tree trunk
                 const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.4, 2, 8);
                 const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x92400E }); // Darker brown
                 const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
                 trunk.position.y = 1;
                 trunk.castShadow = true;
                 treeGroup.add(trunk);
       
                 // Tree leaves - darker for night
                 const leavesGeometry = new THREE.SphereGeometry(1.5, 8, 8);
                 const leavesMaterial = new THREE.MeshPhongMaterial({ color: 0x166534 }); // Dark green
                 const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
                 leaves.position.y = 2.5;
                 leaves.castShadow = true;
                 treeGroup.add(leaves);
       
                 treeGroup.position.set(
                   (Math.random() - 0.5) * 12,
                   0,
                   (Math.random() - 0.5) * 12
                 );
                 
                 scene.add(treeGroup);
                 trees.push(treeGroup);
               }

                       // Create mountains in background - night version
               const mountains = [];
               for (let i = 0; i < 5; i++) {
                 const mountainGeometry = new THREE.ConeGeometry(3, 8, 8);
                 const mountainMaterial = new THREE.MeshPhongMaterial({ color: 0x374151 }); // Darker gray for night
                 
                 const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
                 mountain.position.set(
                   (Math.random() - 0.5) * 30,
                   3,
                   (Math.random() - 0.5) * 30
                 );
                 mountain.scale.set(
                   Math.random() * 2 + 1,
                   Math.random() * 1.5 + 1,
                   Math.random() * 2 + 1
                 );
                 
                 scene.add(mountain);
                 mountains.push(mountain);
               }

                       // Create flowers and grass - night version
               const flowers = [];
               for (let i = 0; i < 20; i++) {
                 const flowerGroup = new THREE.Group();
                 
                 // Flower stem
                 const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 8);
                 const stemMaterial = new THREE.MeshPhongMaterial({ color: 0x166534 }); // Dark green
                 const stem = new THREE.Mesh(stemGeometry, stemMaterial);
                 stem.position.y = 0.4;
                 flowerGroup.add(stem);
       
                 // Flower petals - softer colors for night
                 const petalGeometry = new THREE.SphereGeometry(0.3, 8, 8);
                 const petalMaterial = new THREE.MeshPhongMaterial({ 
                   color: Math.random() > 0.5 ? 0xEC4899 : 0xFCD34D // Softer pink or yellow
                 });
                 const petal = new THREE.Mesh(petalGeometry, petalMaterial);
                 petal.position.y = 0.8;
                 petal.scale.set(1, 0.3, 1);
                 flowerGroup.add(petal);
       
                 flowerGroup.position.set(
                   (Math.random() - 0.5) * 10,
                   0,
                   (Math.random() - 0.5) * 10
                 );
                 
                 scene.add(flowerGroup);
                 flowers.push(flowerGroup);
               }

                       // Animation loop
               const animate = () => {
                 animationIdRef.current = requestAnimationFrame(animate);
       
                 // Twinkle stars
                 stars.rotation.y += 0.0003;
                 stars.children.forEach((star, index) => {
                   if (star.material) {
                     star.material.opacity = 0.5 + Math.sin(Date.now() * 0.001 + index) * 0.4;
                   }
                 });
       
                 // Gentle house sway
                 houseGroup.rotation.y += 0.001;
                 houseGroup.position.y = Math.sin(Date.now() * 0.0005) * 0.1;
       
                 // Trees sway in wind
                 trees.forEach((tree, index) => {
                   tree.rotation.z = Math.sin(Date.now() * 0.001 + index) * 0.1;
                   tree.position.y = Math.sin(Date.now() * 0.002 + index) * 0.05;
                 });
       
                 // Mountains subtle movement
                 mountains.forEach((mountain, index) => {
                   mountain.rotation.y += 0.0002 * (index + 1);
                 });
       
                 // Flowers gentle sway
                 flowers.forEach((flower, index) => {
                   flower.rotation.z = Math.sin(Date.now() * 0.002 + index) * 0.2;
                   flower.position.y = Math.sin(Date.now() * 0.003 + index) * 0.02;
                 });
       
                 renderer.render(scene, camera);
               };

        animate();

        // Handle window resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
          }
        };

      } catch (error) {
        console.error('Failed to load Three.js:', error);
      }
    };

    initThreeJS();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* 3D Canvas - Fixed Background for entire site */}
                     <canvas
                 ref={canvasRef}
                 className="fixed inset-0 w-full h-full z-0"
                 style={{ background: 'linear-gradient(135deg, #0B1426 0%, #1E3A8A 50%, #3730A3 100%)' }}
               />
      
      {/* Home Section Content */}
      <section id="home" className="relative w-full h-screen overflow-hidden z-10">
      
      
      
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
                             <div className="flex items-center justify-center gap-4 mb-4">
                     <motion.div
                       animate={{ rotate: 360 }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     >
                       <Home size={60} className="text-amber-600" />
                     </motion.div>
                     <motion.div
                       animate={{ y: [-10, 10, -10] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                     >
                       <TreePine size={80} className="text-green-600" />
                     </motion.div>
                     <motion.div
                       animate={{ rotate: -360 }}
                       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                     >
                       <Waves size={60} className="text-blue-500" />
                     </motion.div>
                   </div>
        </motion.div>

                         <motion.h1
                   initial={{ opacity: 0, y: -50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.4 }}
                   className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                 >
                   Shubham Baghel
                 </motion.h1>
        
                         <motion.p
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.6 }}
                   className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl font-semibold"
                 >
                   Full Stack Developer & Software Engineer
                 </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
                             <div className="bg-yellow-400/20 backdrop-blur-md rounded-lg p-4 border-2 border-yellow-400/40 shadow-lg shadow-yellow-400/20">
                     <h3 className="text-lg font-semibold mb-2 text-yellow-200">Full Stack</h3>
                     <p className="text-sm text-yellow-100">Node.js, React, TypeScript</p>
                   </div>
                   
                   <div className="bg-blue-400/20 backdrop-blur-md rounded-lg p-4 border-2 border-blue-400/40 shadow-lg shadow-blue-400/20">
                     <h3 className="text-lg font-semibold mb-2 text-blue-200">Microservices</h3>
                     <p className="text-sm text-blue-100">Event-driven architecture</p>
                   </div>
                   
                   <div className="bg-purple-400/20 backdrop-blur-md rounded-lg p-4 border border-purple-400/40 shadow-lg shadow-purple-400/20">
                     <h3 className="text-lg font-semibold mb-2 text-purple-200">Cloud & DevOps</h3>
                     <p className="text-sm text-purple-100">AWS, Docker, Kubernetes</p>
                   </div>
        </motion.div>
        
        
        
                 <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1.2 }}
           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
         >
           <div className="animate-bounce mb-2">
             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
               <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default IslandParadiseHome;
