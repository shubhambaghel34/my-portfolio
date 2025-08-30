import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-primary-color" size={24} />,
      skills: [
        { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
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

  // Build a flat, unique list of skill names for the marquee
  const allSkillNames = Array.from(
    new Set(skillCategories.flatMap((c) => c.skills.map((s) => s.name)))
  );
  const marqueeSkills = [...allSkillNames, ...allSkillNames];

  // Map skill names to Devicon classes
  const deviconMap = {
    'React.js': 'devicon-react-original',
    'TypeScript': 'devicon-typescript-plain',
    'JavaScript': 'devicon-javascript-plain',
    'HTML/CSS': 'devicon-html5-plain',
    'Tailwind CSS': 'devicon-tailwindcss-plain',
    'Node.js': 'devicon-nodejs-plain',
    'NestJS': 'devicon-nestjs-plain',
    'Express.js': 'devicon-express-original',
    'GraphQL': 'devicon-graphql-plain',
    'REST APIs': 'devicon-postman-plain',
    'AWS': 'devicon-amazonwebservices-plain',
    'Docker': 'devicon-docker-plain',
    'Kubernetes': 'devicon-kubernetes-plain',
    'CI/CD': 'devicon-github-original',
    'Terraform': 'devicon-terraform-plain',
    'MongoDB': 'devicon-mongodb-plain',
    'PostgreSQL': 'devicon-postgresql-plain',
    'Redis': 'devicon-redis-plain',
    'Elasticsearch': 'devicon-elasticsearch-plain',
    'Message Queues': 'devicon-rabbitmq-plain'
  };

  const getDeviconClass = (name) => {
    const base = deviconMap[name] || 'devicon-codepen-plain';
    return `${base} colored`;
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

        {/* Flowing marquee of skill chips */}
        <div className="mb-10">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 whitespace-nowrap will-change-transform"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {marqueeSkills.map((name, index) => (
                <div
                  key={`lane1-${index}`}
                  className="inline-flex items-center gap-2 bg-background-tertiary/60 border border-cyan-400/30 rounded-lg px-4 py-2"
                >
                  <i className={`${getDeviconClass(name)} text-2xl`}></i>
                  <span className="text-sm font-medium text-white">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="relative overflow-hidden mt-6">
            <motion.div
              className="flex gap-4 whitespace-nowrap will-change-transform"
              initial={{ x: "-50%" }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {marqueeSkills.map((name, index) => (
                <div
                  key={`lane2-${index}`}
                  className="inline-flex items-center gap-2 bg-background-tertiary/60 border border-cyan-400/30 rounded-lg px-4 py-2"
                >
                  <i className={`${getDeviconClass(name)} text-2xl`}></i>
                  <span className="text-sm font-medium text-white">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Skills;
