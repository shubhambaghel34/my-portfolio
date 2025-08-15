import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'News App',
      description: 'A modern news application built with React and JavaScript. Features include news categorization, search functionality, and responsive design for all devices.',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=News+App',
      category: 'frontend',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'News API'],
      liveUrl: 'https://github.com/shubhambaghel34/Newsapp',
      githubUrl: 'https://github.com/shubhambaghel34/Newsapp',
      features: ['News Categories', 'Search Functionality', 'Responsive Design', 'Real-time Updates'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Counter App',
      description: 'A simple yet elegant counter application built with JavaScript. Features include increment, decrement, and reset functionality with smooth animations.',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Counter+App',
      category: 'frontend',
      technologies: ['JavaScript', 'HTML', 'CSS', 'CodeSandbox'],
      liveUrl: 'https://github.com/shubhambaghel34/Counter_App',
      githubUrl: 'https://github.com/shubhambaghel34/Counter_App',
      features: ['Counter Functionality', 'Smooth Animations', 'Responsive Design', 'Simple UI'],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Trade App',
      description: 'A comprehensive trading application built with TypeScript. Features include real-time data, trading charts, and portfolio management.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Trade+App',
      category: 'frontend',
      technologies: ['TypeScript', 'React', 'Trading APIs', 'Chart.js'],
      liveUrl: 'https://github.com/shubhambaghel34/Tradeapp',
      githubUrl: 'https://github.com/shubhambaghel34/Tradeapp',
      features: ['Real-time Trading Data', 'Interactive Charts', 'Portfolio Management', 'TypeScript'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Event-Driven Microservices',
      description: 'Scalable microservices architecture built with NestJS, Redis, and WebSocket.IO. Implements Circuit Breaker pattern and handles 500+ concurrent uploads.',
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Microservices',
      category: 'backend',
      technologies: ['NestJS', 'TypeScript', 'Redis', 'WebSocket.IO', 'AWS Lambda', 'S3'],
      liveUrl: '#',
      githubUrl: 'https://github.com/shubhambaghel34',
      features: ['Event-Driven Architecture', 'Circuit Breaker Pattern', 'Real-time Communication', 'AWS Integration'],
      status: 'Completed'
    },
    {
      id: 5,
      title: 'API Gateway & Authentication',
      description: 'Enterprise-grade API gateway with JWT authentication, rate limiting, and monitoring. Built for microservices architecture.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=API+Gateway',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'JWT', 'Redis', 'Docker', 'Kubernetes'],
      liveUrl: '#',
      githubUrl: 'https://github.com/shubhambaghel34',
      features: ['JWT Authentication', 'Rate Limiting', 'Request Routing', 'Monitoring', 'Load Balancing'],
      status: 'Completed'
    },
    {
      id: 6,
      title: 'CI/CD Pipeline Automation',
      description: 'Automated CI/CD workflows using GitHub Actions, Docker, and Kubernetes. Implements blue-green deployment and automated testing.',
      image: 'https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=CI+CD',
      category: 'backend',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      liveUrl: '#',
      githubUrl: 'https://github.com/shubhambaghel34',
      features: ['Automated Testing', 'Blue-Green Deployment', 'Infrastructure as Code', 'Monitoring'],
      status: 'Completed'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative z-10">

      {/* No overlay - let 3D background show through */}
      
      {/* No background elements - let 3D background show through */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centric applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-xl shadow-cyan-400/30'
                  : 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-100 hover:from-cyan-400/30 hover:to-blue-500/30 border-2 border-cyan-400/40 shadow-lg shadow-cyan-400/10 hover:shadow-xl hover:shadow-cyan-400/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-md border-2 border-cyan-400/40 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-cyan-400/10 hover:shadow-cyan-400/20"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    project.status === 'Completed' 
                      ? 'bg-green-400/30 text-green-100 border border-green-400/50 shadow-lg shadow-green-400/20' 
                      : 'bg-yellow-400/30 text-yellow-100 border border-yellow-400/50 shadow-lg shadow-yellow-400/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                                      <span
                    key={index}
                    className="px-2 py-1 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 text-cyan-100 rounded text-xs font-semibold border border-cyan-400/50 shadow-md shadow-cyan-400/20"
                  >
                    {tech}
                  </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-color text-white rounded-lg hover:bg-secondary-color transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary-color text-primary-color rounded-lg hover:bg-primary-color hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Interested in seeing more of my work or want to collaborate on a project?
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
