import React from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: 'MyntraXpress',
      description: 'Shop fashion, beauty, and home products with category browsing, product search, filters, wishlists, and cart controls.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85',
      category: 'frontend',
      technologies: [],
      liveUrl: 'https://myntraxpressappweb-dev.vercel.app/',
      githubUrl: 'https://github.com/shubhambaghel34',
      features: [],
      status: 'Live'
    },
    {
      id: 2,
      title: 'Observability Dashboard',
      description: 'Monitor application health and service performance through a clear view of key operational metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
      category: 'frontend',
      technologies: [],
      liveUrl: 'https://observibility-dashboard-app.vercel.app/',
      githubUrl: 'https://github.com/shubhambaghel34',
      features: [],
      status: 'Live'
    },
    {
      id: 3,
      title: 'JSON Formatter App',
      description: 'Format and organize JSON data in a clear interface for easier reading and inspection.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85',
      category: 'frontend',
      technologies: [],
      liveUrl: 'https://json-formatter-eosin.vercel.app/',
    },
    {
      id:4,
      title: 'Currency Exchange App',
      description: 'Convert currencies and follow exchange rates through a clear, easy-to-use interface.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85',
      category: 'frontend',
      technologies: [],
      liveUrl: 'https://currency-exchange-app-puce.vercel.app/',
      githubUrl: 'https://github.com/shubhambaghel34',
      features: [],
      status: 'Live'
    }
  ];

  const filteredProjects = projects;

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
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            A live project showcasing my work in creating user-centric web applications.
          </p>
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
              className="h-full flex flex-col bg-transparent border border-cyan-400/40 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-300/70"
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
                    project.status === 'Live' 
                      ? 'bg-green-400/30 text-green-100 border border-green-400/50 shadow-lg shadow-green-400/20' 
                      : 'bg-yellow-400/30 text-yellow-100 border border-yellow-400/50 shadow-lg shadow-yellow-400/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-1 flex-col">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="min-h-[5rem] text-sm leading-relaxed text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                {project.technologies.length > 0 && <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                                      <span
                    key={index}
                    className="px-2 py-1 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 text-cyan-100 rounded text-xs font-semibold border border-cyan-400/50 shadow-md shadow-cyan-400/20"
                  >
                    {tech}
                  </span>
                  ))}
                </div>}

                {/* Features */}
                {project.features.length > 0 && <div className="mb-6">
                                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                </div>}

                {/* Action Buttons */}
                <div className="mt-auto flex gap-3">
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
