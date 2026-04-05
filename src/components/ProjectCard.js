const ProjectCard = ({ title, description }) => (
  <div className="card">
    <h3 style={{ marginBottom: '10px', color: '#3b82f6' }}>{title}</h3>
    <p>{description}</p>
  </div>
);
export default ProjectCard;