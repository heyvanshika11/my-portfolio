import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Award, Code, Users, CalendarDays, Rocket } from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('hackathons');

  const hackathons = [
    "SAP Labs Hackfest regional round (Top 150+ teams)",
    "HackIndia 2025 (Top 15 finalist amongst 90+ teams)",
    "Smart India Hackathon (SIH) 2024",
    "Organized technical events under ACM Student Chapter"
  ];

  const galleryData = {
    hackathons: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      src: `/images/hackathons-participated/${i + 1}.jpg`,
      fallback: '/hackathon_scene.png',
      alt: 'Hackathon Participation'
    })),
    enterprise: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      src: `/images/chitkara-enterprise-lab/${i + 1}.jpg`,
      fallback: '/hackathon_scene.png',
      alt: 'Chitkara Enterprise Lab Event'
    })),
    acm: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      src: `/images/acm-events-hackathons/${i + 1}.jpg`,
      fallback: '/hackathon_scene.png',
      alt: 'ACM Event'
    }))
  };

  const handleImageError = (e, fallback) => {
    e.target.src = fallback;
  };

  return (
    <section id="achievements" className="section" style={{ minHeight: '100vh' }}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Journey & Achievements
        </motion.h2>

        {/* Highlighted Hackathons List */}
        <div className="grid-2" style={{ marginBottom: '60px' }}>
          <motion.div 
            style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ padding: '40px', background: 'var(--glass-bg)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Major Milestones</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '30px' }}>
                Constantly pushing boundaries through competitive programming and nationwide hackathons. I thrive in high-energy environments, solving real-world problems.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                    <p style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800 }}>150+</p>
                    <p style={{ color: 'var(--text-secondary)' }}>Teams Beaten</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                    <p style={{ fontSize: '2rem', color: 'var(--accent)', fontWeight: 800 }}>Top 15</p>
                    <p style={{ color: 'var(--text-secondary)' }}>HackIndia 2025</p>
                  </div>
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px' }}>
            {hackathons.map((achievement, index) => (
              <motion.div 
                key={index}
                className="glass card"
                style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', borderRadius: '15px' }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, delay: index * 0.1 }}
              >
                <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '15px', borderRadius: '50%', color: 'var(--accent)' }}>
                  {index === 0 ? <Trophy size={24} /> : index === 1 ? <Star size={24} /> : index === 2 ? <Code size={24} /> : <Award size={24} />}
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5 }}>
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Gallery */}
        <div style={{ marginTop: '50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('hackathons')}
              style={{ padding: '12px 25px', borderRadius: '30px', border: 'none', cursor: 'pointer', background: activeTab === 'hackathons' ? 'var(--primary)' : 'var(--glass-bg)', color: 'white', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center' }}
            >
              <Rocket size={18} /> Hackathons Participated
            </button>
            <button 
              onClick={() => setActiveTab('enterprise')}
              style={{ padding: '12px 25px', borderRadius: '30px', border: 'none', cursor: 'pointer', background: activeTab === 'enterprise' ? 'var(--primary)' : 'var(--glass-bg)', color: 'white', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center' }}
            >
              <Users size={18} /> Chitkara Enterprise Lab
            </button>
            <button 
              onClick={() => setActiveTab('acm')}
              style={{ padding: '12px 25px', borderRadius: '30px', border: 'none', cursor: 'pointer', background: activeTab === 'acm' ? 'var(--primary)' : 'var(--glass-bg)', color: 'white', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center' }}
            >
              <CalendarDays size={18} /> ACM Events
            </button>
          </div>

          <motion.div 
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}
          >
            <AnimatePresence mode="popLayout">
              {galleryData[activeTab].map((item) => (
                <motion.div
                  key={`${activeTab}-${item.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderRadius: '15px', overflow: 'hidden', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', height: '250px' }}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    onError={(e) => handleImageError(e, item.fallback)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Achievements;
