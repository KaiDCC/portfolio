interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  imageUrl: string;
  onOpenModal: () => void; 
}

export default function ProjectCard({ title, description, tags, githubLink, imageUrl, onOpenModal }: ProjectCardProps) {
  return (
    <div className="project-card">

      <div className="project-image-container">
        <img src={imageUrl} alt={`Capa do projeto ${title}`} className="project-image" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
      
      <div className="project-links">

        {githubLink ? (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="custom-github-icon" />
              <span>Ver no GitHub</span>
            </a>
        ) : (
            <button onClick={onOpenModal} className="project-link button-modal">
              <span>Ver Detalhes do Projeto</span>
            </button>
        )}
      </div>
    </div>
  );
}