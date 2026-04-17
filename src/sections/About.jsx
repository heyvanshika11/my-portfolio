import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Cpu, Layout, Wrench, Bug } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={24} />,
      skills: ["Java", "Python", "C++", "C"]
    },
    {
      title: "Software Development",
      icon: <Terminal size={24} />,
      skills: ["Data Structures & Algorithms", "OOP", "REST APIs", "Backend Development", "Debugging", "Code Optimization"]
    },
    {
      title: "Data Analytics",
      icon: <Database size={24} />,
      skills: ["SQL", "MySQL", "Excel", "Power BI", "Data Cleaning", "Data Visualization", "Dashboarding"]
    },
    {
      title: "Software Testing",
      icon: <Bug size={24} />,
      skills: ["Functional Testing", "Test Case Design", "Bug Reporting", "Test Documentation", "SDLC", "STLC"]
    },
    {
      title: "Web Technologies",
      icon: <Layout size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "JIRA", "Postman", "VS Code"]
    },
    {
      title: "Core Computer Science",
      icon: <Cpu size={24} />,
      skills: ["DBMS", "Operating Systems", "Computer Networks"]
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        {/* Full width Journey Card */}
        <motion.div 
          className="glass card"
          style={{ marginBottom: '50px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>My Journey</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', fontSize: '1.05rem' }}>
            I am a pre-final year B.Tech Computer Science student at Chitkara University, with a strong foundation in programming, data structures, and core computer science concepts. I enjoy solving problems and building practical solutions that go beyond theory to create real-world impact.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            My interests span Software Development, Data Analytics, and QA Testing. I like working with APIs, analyzing data, debugging systems, and ensuring software quality through structured testing. I am driven by the process of turning ideas into reliable, scalable products while continuously learning and exploring new technologies.
          </p>
        </motion.div>

        {/* Technical Expertise Grid */}
        <h3 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Technical Expertise</h3>
        <div className="grid-3">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="glass card"
              style={{ display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}>
                  {category.icon}
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{category.title}</h4>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid var(--glass-border)',
                      padding: '6px 14px', 
                      borderRadius: '20px', 
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
