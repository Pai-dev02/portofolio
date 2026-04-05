import { Code2, Globe, Cpu } from 'lucide-react';

const ProjectCard = ({ title, desc, IconComponent }) => (
  <div className="card" style={{ marginBottom: '20px' }}>
    <div className="icon-3d" style={{ marginBottom: '15px' }}>
      <IconComponent size={48} />
    </div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{title}</h3>
    <p style={{ color: 'rgba(255,255,255,0.7)' }}>{desc}</p>
  </div>
);

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Web Architecture", desc: "Sistem cloud yang scalable.", icon: Globe },
    { id: 2, title: "Mobile UI Kit", desc: "Desain interface modern.", icon: Cpu },
    { id: 3, title: "Backend Engine", desc: "API dengan performa tinggi.", icon: Code2 }
  ];

  return (
    <div>
      <h2 style={{ marginBottom: '30px', textAlign: 'center', fontSize: '2.5rem' }}>Creative Works</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {projects.map(p => (
          <ProjectCard key={p.id} title={p.title} desc={p.desc} IconComponent={p.icon} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;