import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <MapPin size={20} />, label: 'Location', value: 'Pune, India' },
    { icon: <Calendar size={20} />, label: 'Experience', value: '7+ Years' },
    { icon: <GraduationCap size={20} />, label: 'Education', value: 'Self-Taught Full Stack Developer' },
    { icon: <Briefcase size={20} />, label: 'Current Role', value: 'Associate Staff Engineer at Nagarro' },
  ];

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
    <section id="about" className="py-20 relative z-10">

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
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-color to-accent-color mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-accent-color rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-yellow-400/30 to-blue-500/30 rounded-full flex items-center justify-center border-2 border-yellow-400/50 shadow-2xl shadow-yellow-400/20">
                  <User size={120} className="text-yellow-300 drop-shadow-lg" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 backdrop-blur-md rounded-lg border-2 border-yellow-400/40 shadow-lg shadow-yellow-400/10 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300">
                  <div className="text-yellow-300 drop-shadow-lg">{info.icon}</div>
                  <div>
                    <p className="text-sm text-yellow-200 font-medium">{info.label}</p>
                    <p className="font-semibold text-white drop-shadow-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Seasoned Full Stack Developer with 7+ Years of Excellence
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm a seasoned Full Stack Developer with over 7 years of hands-on experience in the software engineering sector. 
              Recognized for demonstrating a natural aptitude for architecting event-driven microservices and optimising 
              backend systems for performance, I have a verifiable history of contributing directly to operational scalability 
              and engineering efficiency throughout my career.
            </p>

            <p className="text-gray-300 leading-relaxed">
              As such, I've consistently delivered reliable backend infrastructures, supported high-concurrency APIs, 
              and enabled cross-region functionality for global platforms. Professional focal points include NodeJS, 
              TypeScript, NestJS, GraphQL/REST APIs, Redis caching, event-driven architecture, Kafka messaging systems, 
              AWS cloud and serverless tools, Docker, Kubernetes, CI/CD workflows, and microservices resiliency design.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently, I'm an Associate Staff Engineer with Nagarro, where I've built scalable event-driven microservices 
              using NestJS, Redis, and WebSocket.IO to support real-time communication and throughput. I also designed 
              and integrated a generic Circuit Breaker across 8+ services to safeguard system resilience.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Code Quality', 'User Experience'].map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-400/30 to-blue-500/30 text-yellow-100 rounded-full text-sm font-semibold border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/20 hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
