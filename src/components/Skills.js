import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Zap, Shield, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-primary-color" size={24} />,
      skills: [
        { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
        { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-900' },
        { name: 'HTML/CSS', level: 92, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-blue-500' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="text-primary-color" size={24} />,
      skills: [
        { name: 'Node.js', level: 93, color: 'from-green-500 to-green-700' },
        { name: 'NestJS', level: 90, color: 'from-red-500 to-red-700' },
        { name: 'Express.js', level: 88, color: 'from-gray-500 to-gray-700' },
        { name: 'GraphQL', level: 85, color: 'from-pink-500 to-purple-600' },
        { name: 'REST APIs', level: 95, color: 'from-blue-500 to-indigo-600' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-primary-color" size={24} />,
      skills: [
        { name: 'AWS', level: 88, color: 'from-orange-500 to-yellow-600' },
        { name: 'Docker', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Kubernetes', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'CI/CD', level: 87, color: 'from-green-500 to-green-700' },
        { name: 'Terraform', level: 75, color: 'from-purple-500 to-purple-700' }
      ]
    },
    {
      title: 'Database & Caching',
      icon: <Zap className="text-primary-color" size={24} />,
      skills: [
        { name: 'MongoDB', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Redis', level: 88, color: 'from-red-500 to-red-700' },
        { name: 'Elasticsearch', level: 80, color: 'from-yellow-500 to-orange-600' },
        { name: 'Message Queues', level: 85, color: 'from-purple-500 to-purple-700' }
      ]
    }
  ];

  const additionalSkills = [
    { name: 'Microservices', icon: <Cpu size={16} />, category: 'Architecture' },
    { name: 'Event-Driven', icon: <Zap size={16} />, category: 'Patterns' },
    { name: 'Circuit Breaker', icon: <Shield size={16} />, category: 'Resilience' },
    { name: 'WebSocket.IO', icon: <Globe size={16} />, category: 'Real-time' },
    { name: 'Serverless', icon: <Cloud size={16} />, category: 'Cloud' },
    { name: 'Monitoring', icon: <Wrench size={16} />, category: 'Ops' }
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
    <section id="skills" className="py-20 relative z-10">

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
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-md border-2 border-cyan-400/40 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20"
            >
                              <div className="flex items-center gap-3 mb-6">
                  <div className="text-cyan-400 drop-shadow-lg">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white drop-shadow-sm">{category.title}</h3>
                </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background-tertiary rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">Specialized Expertise</h3>
          <div className="bg-background-secondary border border-border-color rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-6 border-r border-b border-border-color last:border-r-0 hover:bg-accent-color/5 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary-color">{skill.icon}</div>
                    <span className="text-sm text-accent-color font-medium">{skill.category}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-text-primary mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Rust', status: 'In Progress', color: 'from-orange-500 to-red-600' },
              { name: 'WebAssembly', status: 'Exploring', color: 'from-purple-500 to-pink-600' },
              { name: 'Machine Learning', status: 'Basics', color: 'from-blue-500 to-indigo-600' },
              { name: 'Blockchain', status: 'Learning', color: 'from-green-500 to-teal-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg shadow-lg`}
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm opacity-90">{item.status}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
