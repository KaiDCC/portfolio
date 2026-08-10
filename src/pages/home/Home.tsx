import Hero from '../../components/sections/Hero';
import Skills from '../../components/sections/Skills';
import Projects from '../../components/sections/Projects';
import Timeline from '../../components/sections/Timeline';

function Home() {
    return (
        <main>
            <section id="sobre">
                <Hero />
            </section>

            <section id="experiencia">
                <Timeline />
            </section>

            <section id="habilidades">
                <Skills />
            </section>

            <section id="projetos">
                <Projects />
            </section>
        </main>
    );
}

export default Home;