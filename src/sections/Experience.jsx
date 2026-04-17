import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Experience Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <Briefcase size={30} color="var(--primary)" />
              <h3 style={{ fontSize: '2rem' }}>Work Experience</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <motion.div
                className="glass card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>President</h4>
                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>Ecolution Club | August 2025 – April 2026</p>
                <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', lineHeight: 1.6 }}>
                  <li>Led initiatives focused on sustainability, innovation, and community engagement.</li>
                  <li>Planned and executed events and campaigns, ensuring effective coordination and impactful outcomes.</li>
                  <li>Managed team operations, delegated responsibilities, and drove projects from ideation to execution.</li>
                </ul>
              </motion.div>

              <motion.div
                className="glass card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.1 }}
              >
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Outreach Coordinator</h4>
                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>Chitkara Enterprise Lab | July 2024 - March 2025</p>
                <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', lineHeight: 1.6 }}>
                  <li>Managed social media content and promotions for entrepreneurship events.</li>
                  <li>Coordinated with industry speakers and mentors for guest sessions.</li>
                </ul>
              </motion.div>

              <motion.div
                className="glass card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.2 }}
              >
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Core Member</h4>
                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>ACM Student Chapter | July 2023 – September 2024</p>
                <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', lineHeight: 1.6 }}>
                  <li>Contributed to organizing technical events, workshops, and coding competitions to promote a strong computing culture.</li>
                  <li>Collaborated with cross-functional teams to manage hackathons, coding contests, and guest sessions.</li>
                  <li>Coordinated with industry professionals and speakers to create valuable learning opportunities for students.</li>
                </ul>
              </motion.div>

              <motion.div
                className="glass card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.3 }}
              >
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Project Manager</h4>
                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>Dyndox Technologies Pvt. Ltd | Aug 2023 - Feb 2024</p>
                <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', lineHeight: 1.6 }}>
                  <li>Assisted in project planning and documentation.</li>
                  <li>Supported task tracking and coordinated with team members to ensure progress.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <GraduationCap size={30} color="var(--primary)" />
              <h3 style={{ fontSize: '2rem' }}>Education</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* B.Tech */}
              <motion.div
                className="glass card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Bachelor of Engineering (Computer Science)</h4>
                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>Chitkara University | 2023 – 2027</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '15px' }}>
                  Focusing on Software Engineering fundamentals, Database & SQL, and AI.
                </p>
                <div style={{ marginTop: '10px' }}>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-primary)' }}>Certifications</h5>
                  <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px', lineHeight: 1.6 }}>
                    <li><strong>Infosys Springboard:</strong> Database & SQL</li>
                    <li><strong>Infosys Springboard:</strong> Software Engineering Fundamentals</li>
                  </ul>
                </div>
              </motion.div>

              {/* 12th */}
              <motion.div
                className="glass card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.1 }}
              >
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Senior Secondary (12th)</h4>
                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>DAV Public School, Kurukshetra, Haryana | 2022 – 2023</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Completed senior secondary education with a focus on Science stream (PCM).
                </p>
              </motion.div>

              {/* 10th */}
              <motion.div
                className="glass card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.2 }}
              >
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Secondary (10th)</h4>
                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>DAV Public School, Kurukshetra, Haryana | 2020 – 2021</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Completed secondary education with strong academic fundamentals.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
