import { useState } from 'react';
import { MapPin, MessageCircle, Copy, Check } from 'lucide-react';

export default function Hero() {

    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("kailanedelconti@gmail.com");
        setCopied(true);
        
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <span className="hero-greeting">Hello World!</span>  

                <h1 className="hero-name">Kailane Del Conti Cassiolato</h1>
                
                <div className="hero-subtitle">
                    <h2 className="hero-role">Desenvolvedora Full-Stack Júnior</h2>
                    <span className="hero-location">
                        <MapPin size={18} /> Curitiba - PR
                    </span>
                </div>

                <p className="hero-description">
                    Sou desenvolvedora de software júnior, formada em Análise e Desenvolvimento de Sistemas. Tenho experiência com aplicações web, APIs, automações e manutenção de sistemas em produção.
                    <br></br>
                    Já trabalhei com React, Python, FastAPI, Flask, bancos de dados e serviços em nuvem, mas não me limito a uma única stack. Busco uma nova oportunidade em desenvolvimento de software, com espaço para contribuir, aprender novas tecnologias e evoluir junto com a equipe.
                    <br></br>  <br></br>
                    Fora do código, gosto de desenhar, ouvir música, assistir séries e aproveitar a companhia do meu gato.
                </p>

                <div className="social-buttons">
                    <a href="https://www.linkedin.com/in/kailanedelconticassiolato/" target="_blank" rel="noopener noreferrer" className="btn-social">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="social-icon-img" /> LinkedIn
                    </a>
                    
                    <a href="https://github.com/KaiDCC" target="_blank" rel="noopener noreferrer" className="btn-social">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="social-icon-img github-icon" /> GitHub
                    </a>
                    
                    <button onClick={handleCopyEmail} className="btn-social" type="button">
                        {copied ? <Check size={20} /> : <Copy size={20} />} 
                        {copied ? "Copiado!" : "E-mail"}
                    </button>
                    
                    <a href="https://wa.me/5541996372490" target="_blank" rel="noopener noreferrer" className="btn-social">
                        <MessageCircle size={20} /> WhatsApp
                    </a>
                </div>
            </div>
            
            <div className="hero-image">
                <div className="avatar-circle">  
                    <img src="/perfil.jpg" alt="Kailane Cassiolato" /> 
                </div>
            </div>
        </div>
    );    
}
