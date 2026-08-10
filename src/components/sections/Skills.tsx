import { Code2, Database, Server, Wrench } from 'lucide-react';

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="section-title">Tecnologias & Ferramentas</h2>
      
      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-icon"><Code2 size={28} strokeWidth={1.5} /></div>
          <h3>Front-end</h3>
          <div className="skill-logos">
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
              <span className="tooltip">React</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" />
              <span className="tooltip">Vite</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
              <span className="tooltip">TypeScript</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
              <span className="tooltip">CSS3</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
              <span className="tooltip">HTML5</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span className="tooltip">JavaScript</span>
            </div>
            
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-icon"><Server size={28} strokeWidth={1.5} /></div>
          <h3>Back-end & APIs</h3>
          <div className="skill-logos">
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
              <span className="tooltip">Python</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" />
              <span className="tooltip">FastAPI</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask" />
              <span className="tooltip">Flask</span>
            </div>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-icon"><Database size={28} strokeWidth={1.5} /></div>
          <h3>Bancos de Dados</h3>
          <div className="skill-logos">
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              <span className="tooltip">MongoDB</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite" />
              <span className="tooltip">SQLite</span>
            </div>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-icon"><Wrench size={28} strokeWidth={1.5} /></div>
          <h3>Infra & Ferramentas</h3>
          <div className="skill-logos">
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
              <span className="tooltip">AWS</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" />
              <span className="tooltip">Docker</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" alt="Windows" />
              <span className="tooltip">Windows</span>
            </div>
            <div className="logo-wrapper">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" alt="Ubuntu" />
              <span className="tooltip">Ubuntu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
