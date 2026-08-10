import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar({ toggleTheme, isDarkMode}: any) {
    const [activeSection, setActivateSection] = useState('sobre');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['sobre', 'experiencia', 'habilidades', 'projetos'];
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActivateSection(section);
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // visualização no celular
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="navbar">
            
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Abrir menu">
                {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>

            <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''} onClick={closeMenu}>Sobre mim</a>
                <a href="#experiencia" className={activeSection === 'experiencia' ? 'active' : ''} onClick={closeMenu}>Experiência</a>
                <a href="#habilidades" className={activeSection === 'habilidades' ? 'active' : ''} onClick={closeMenu}>Habilidades</a>
                <a href="#projetos" className={activeSection === 'projetos' ? 'active' : ''} onClick={closeMenu}>Projetos</a>
            </nav>

            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Alternar tema">
                {isDarkMode ? (
                    <Sun size={24} strokeWidth={1.5} />
                ) : (
                    <Moon size={24} strokeWidth={1.5} />
                )}
            </button>
        </header>
    );
}
