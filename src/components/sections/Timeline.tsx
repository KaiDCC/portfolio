import TimelineItem from '../shared/TimelineItem';

export default function Timeline() {
  const experiences = [
    {
      period: "09/2025 - 06/2026",
      role: "Desenvolvedora Full-Stack Júnior",
      company: "SCRYTA TECNOLOGIA",
      description: "Atuei no desenvolvimento e na manutenção de uma plataforma de automação contábil em produção, contribuindo tanto no front-end quanto no back-end. Trabalhei na criação e evolução de APIs com Python e FastAPI, no desenvolvimento de interfaces com React e Vite e em integrações com MongoDB e serviços da AWS. Também participei da correção de falhas, implementação de funcionalidades e manutenção contínua do sistema."
    },
    {
      period: "06/2025 - 09/2025",
      role: "Desenvolvedora de Sistemas | Automação Fiscal",
      company: "SCRYTA Assessoria Contábil",
      description: "Fui contratada inicialmente para apoiar a otimização das rotinas do escritório contábil. Durante esse período, identifiquei processos repetitivos e gargalos no tratamento de informações fiscais e participei do desenvolvimento de soluções internas para automatizar essas atividades. Essa experiência marcou minha transição para uma atuação focada em desenvolvimento de sistemas."
    },
    {
      period: "06/2020 - 05/2025",
      role: "Auxiliar Administrativo / Jovem Aprendiz",
      company: "SINQ Administradora de Condomínios",
      description: "Atuação de 5 anos em rotinas administrativas e financeiras corporativas. Essa bagagem me proporcionou forte visão de negócios, resiliência e entendimento profundo de processos empresariais e habilidades fundamentais que hoje aplico para criar softwares e automações alinhadas à realidade das empresas."
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="section-title">Trajetória Profissional</h2>
      
      <div className="timeline-list">
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={index}
            period={exp.period}
            role={exp.role}
            company={exp.company}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
}
