import React from 'react';

// Komponen Avatar SVG Kustom (Dibuat agar terlihat "3D" dan Profesional)
const BlackGirlCurlyAvatar = () => (
  <div className="avatar-container icon-3d">
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* BAYANGAN (Shadow) untuk efek timbul */}
      <circle cx="64" cy="68" r="60" fill="black" opacity="0.2"/>
      
      {/* Latar Belakang Lingkaran dengan Gradient (Tema kita: Biru) */}
      <defs>
        <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#3a7bd5" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="60" fill="url(#avatarGradient)" stroke="white" strokeWidth="2"/>

      {/* RAMBUT KERITING (Curly Hair) - Layer Belakang */}
      <g fill="#1A1A1A">
        <circle cx="45" cy="40" r="12"/><circle cx="64" cy="35" r="12"/><circle cx="83" cy="40" r="12"/>
        <circle cx="35" cy="55" r="12"/><circle cx="93" cy="55" r="12"/>
        <circle cx="35" cy="75" r="12"/><circle cx="93" cy="75" r="12"/>
      </g>

      {/* LEHER & BONE STRUCTURE */}
      <ellipse cx="64" cy="85" rx="15" ry="20" fill="#6F4E37"/> {/* Warna kulit leher */}

      {/* WAJAH (Face Shape) */}
      <ellipse cx="64" cy="70" rx="30" ry="35" fill="#8D5524"/> {/* Warna kulit Hitam Manis/Medium Dark */}
      
      {/* MATA (Eyes) */}
      <circle cx="54" cy="65" r="4" fill="#1A1A1A"/> {/* Mata Kiri */}
      <circle cx="74" cy="65" r="4" fill="#1A1A1A"/> {/* Mata Kanan */}
      
      {/* SENYUM (Smile) */}
      <path d="M54 80C54 80 59 85 64 85C69 85 74 80 74 80" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>

      {/* ALIS (Brows) */}
      <path d="M48 58C48 58 52 56 56 58" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M72 58C72 58 76 56 80 58" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* RAMBUT KERITING - Layer Depan (Menutupi sebagian dahi) */}
      <g fill="#1A1A1A">
        <circle cx="50" cy="35" r="10"/><circle cx="64" cy="32" r="10"/><circle cx="78" cy="35" r="10"/>
        <circle cx="42" cy="48" r="10"/><circle cx="86" cy="48" r="10"/>
      </g>
    </svg>
  </div>
);

const About = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '30px', textAlign: 'center', fontSize: '2.5rem' }}>Tentang Saya</h2>
      
      {/* Bungkus dalam Card untuk efek Glassmorphism */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* GUNAKAN KOMPONEN AVATAR DI SINI */}
        <BlackGirlCurlyAvatar />
        
        <h1 style={{ fontSize: '2rem', marginTop: '20px', color: '#fff' }}>YOLANDA KOKE</h1>
        <p style={{ color: '#00d2ff', fontWeight: 'bold' }}>202352039</p>
        
        <div style={{ margin: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', width: '100%' }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Saya adalah seorang Mhasiswa D3 Teknik Komputer yang bersemangat dalam menciptakan *interface* web yang indah, 
            responsif, dan mudah digunakan. Berfokus pada pengembangan menggunakan React JS dengan sentuhan desain modern.
          </p>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>Core Expertise:</p>
          <span className="skill-tag">HTML5 / CSS3</span>
          <span className="skill-tag">JavaScript ES6+</span>
          <span className="skill-tag">React JS / Redux</span>
          <span className="skill-tag">UI/UX Design</span>
        </div>
      </div>
    </div>
  );
};

export default About;