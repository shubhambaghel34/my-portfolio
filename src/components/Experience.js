import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Nagarro',
      position: 'Associate Staff Engineer',
      duration: '2023 - Present',
      location: 'Pune, India',
      companyUrl: 'https://www.nagarro.com/en/',
      description: 'Leading development of scalable event-driven microservices and architecting resilient backend systems. Collaborating with business analysts and engineering leaders to drive delivery of reliable, secure, and scalable platforms.',
      technologies: ['NestJS', 'TypeScript', 'Redis', 'WebSocket.IO', 'AWS Lambda', 'S3', 'Step Functions'],
      achievements: [
        'Built scalable event-driven microservices using NestJS, Redis, and WebSocket.IO',
        'Designed and integrated generic Circuit Breaker across 8+ services for system resilience',
        'Developed multi-region file workflows handling 500+ concurrent uploads per day'
      ]
    },
    {
      company: 'UST',
      position: 'Senior Software Engineer',
      duration: '2018 - 2023',
      location: 'India',
      companyUrl: 'https://www.ust.com/en/boundless/product-engineering',
      description: 'Delivered reliable backend infrastructures, supported high-concurrency APIs, and enabled cross-region functionality for global platforms. Specialized in microservices architecture and cloud engineering.',
      technologies: ['Node.js', 'TypeScript', 'GraphQL', 'Kafka', 'Docker', 'Kubernetes', 'AWS'],
      achievements: [
        'Architected event-driven microservices for high-performance applications',
        'Implemented Redis caching strategies improving response times by 60%',
        'Designed CI/CD workflows reducing deployment time by 70%'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 relative z-10">

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
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-color to-accent-color mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-yellow-400/20 to-blue-500/20 backdrop-blur-md rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-400/40 shadow-yellow-400/10 hover:shadow-yellow-400/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-primary-color" size={20} />
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-yellow-300 mb-2">{exp.company}</h4>
                  
                              <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>
            </div>
                </div>
                
                <motion.a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-color hover:text-secondary-color transition-colors duration-200 mt-4 lg:mt-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Company Website</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

              <div className="mb-6">
                <h5 className="font-semibold text-white mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 text-cyan-100 rounded-full text-sm font-semibold border-2 border-cyan-400/50 shadow-md shadow-cyan-400/20"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-text-primary mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      className="flex items-start gap-3 text-text-secondary"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: achievementIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary-color rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-6">
            Looking for new opportunities to grow and contribute to innovative projects
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
