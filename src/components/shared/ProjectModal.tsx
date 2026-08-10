import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: any; 
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === project.slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? project.slides.length - 1 : prev - 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} /> 
          </button>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <p>{project.overview}</p>
          </section>

          {project.slides && project.slides.length > 0 && (
            <section className="modal-section carousel-section">
              <h3>Demonstração da Interface</h3>
              
              <div className="carousel-container">
                
                <div className="carousel-image-wrapper">
                  <button onClick={prevSlide} className="carousel-btn prev">
                    <ChevronLeft size={24} />
                  </button>
                  
                  <img 
                    src={project.slides[currentSlide].image} 
                    alt={project.slides[currentSlide].title} 
                    className="carousel-image"
                  />

                  <button onClick={nextSlide} className="carousel-btn next">
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="carousel-info">
                  <h4>{project.slides[currentSlide].title}</h4>
                  <p>{project.slides[currentSlide].info}</p>
                </div>
              </div>

              {/* Bolinhas */}
              <div className="carousel-indicators">
                {project.slides.map((_: any, index: number) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </section>
          )}

          <section className="modal-section tech-section">
            <h3>Tecnologias Utilizadas</h3>
            
            {project.techStack?.frontend && (
              <>
                <h4><b>FRONTEND:</b></h4>
                <ul>
                  {project.techStack.frontend.map((tech: {name: string, desc: string}, i: number) => (
                    <li key={i}><strong>{tech.name}:</strong> {tech.desc}</li>
                  ))}
                  <br></br>
                </ul>
              </>
            )}

            {project.techStack?.backend && (
              <>
                <h4><b>BACKEND:</b></h4>
                <ul>
                  {project.techStack.backend.map((tech: {name: string, desc: string}, i: number) => (
                    <li key={i}><strong>{tech.name}:</strong> {tech.desc}</li>
                  ))}
                </ul>
              </>
            )}

            {project.techStack?.infra && (
              <>
                <h4>Infraestrutura</h4>
                <ul>
                  {project.techStack.infra.map((tech: {name: string, desc: string}, i: number) => (
                    <li key={i}><strong>{tech.name}:</strong> {tech.desc}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <section className="modal-section details-section">
            <h3>Arquitetura e Segurança</h3>
            <ul>
              {project.architecture?.map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h3>Principais Funcionalidades</h3>
            <ul>
              {project.features?.map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}