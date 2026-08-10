import { useState } from 'react';
import ProjectCard from "../shared/ProjectCard";
import ProjectModal from "../shared/ProjectModal";


export default function Projects() {

    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    const myProjects = [
        // PROJETO 1
        {
            title: "Gestão Societaria",
            description: "Sistema interno criado para automatizar e centralizar rotinas de gestão societária, permitindo acompanhar vencimentos de alvarás e certificados, gerar alertas e produzir contratos padronizados. \nDesenvolvi o projeto do zero com base nas necessidades do setor responsável e nas diretrizes técnicas definidas pelo tech lead. Atualmente, a solução é utilizada localmente por uma empresa de contabilidade que atende mais de 700 empresas.",
            tags: ["React", "Flask", "Node.js", "SQLite"],
            imageUrl: "/projects/societario/tela_dashboard.png",
            githubLink: "https://github.com/KaiDCC/gestao-societaria"
            
        },
        // PROJETO 2
        {
            title: "Zenga - DCTFWeb sem e-CAC",
            tipo: "privado",
            description: "Plataforma de automação contábil criada para simplificar a entrega de obrigações fiscais, como MIT e DCTFWeb, centralizando transmissões, recibos e guias fiscais. \nAtuei na evolução e manutenção Full Stack da plataforma entre 01/09/2025 e 24/04/2026, trabalhando no layout e na componentização do front-end, além da implementação de novas funcionalidades e APIs no back-end. O sistema permanece em produção e possui repositório privado.",
            
            tags: ["React", "FastAPI", "MongoDB", "AWS", "Python", "Repositório Privado"], 
            imageUrl: "/projects/zenga/login_zenga.png", 
            
            overview: "A Zenga elimina a necessidade de acesso manual ao e-CAC, permitindo transmissões, downloads de recibos e emissão de guias em lote de forma centralizada. O sistema consome arquivos JSON gerados por sistemas contábeis externos e os processa de forma autônoma. Devido à sensibilidade dos dados fiscais, a aplicação conta com criptografia de ponta, infraestrutura em nuvem e mecanismos estritos de concorrência para garantir total integridade, performance e confidencialidade.",
                    
            slides: [
                {
                    title: "Dashboard & Métricas | Etapa 1",
                    image: "/projects/zenga/dash1_entrega.png",
                    info: "Tela de dashboard para acompanhamento geral das entregas. Apresenta o status do processamento de MIT e DCTFWeb, comparando o total encerrado ou transmitido com o total de empresas. Ao passar o cursor sobre os indicadores, é exibido o número total. Também traz informações diretamente do e-CAC, indicando se algum CNPJ exige maior atenção ou apresenta algo fora do habitual. A tela possui rolagem automática, permitindo que permaneça ligada sem a necessidade de alternância manual."
                },
                {
                    title: "Dashboard & Métricas | Slide 1",
                    image: "/projects/zenga/dash1_pendencia.png",
                    info: "Tela de dashboard que se intercala automaticamente com a tela de entregas. O acompanhamento geral das pendências apresenta a quantidade de empresas com alguma inadimplência e o total de empresas regulares. Ao passar o cursor sobre os indicadores, é exibido o número total."
                },
                {
                    title: "Dashboard & Métricas | Slide 2",
                    image: "/projects/zenga/dash2.png",
                    info: "Tela de dashboard para a gestão das datas de vencimento dos impostos em determinado mês e do total de certificados cadastrados."
                },
                {
                    title: "Dashboard & Métricas | Slide 3",
                    image: "/projects/zenga/dash3.png",
                    info: "Tela de dashboard para a gestão dos valores do eSocial e dos riscos previdenciários. Apresenta o total de guias emitidas, as empresas que tiveram guias do eSocial emitidas e o valor correspondente a cada uma, além do valor total do eSocial somado de todas as empresas. Também apresenta os valores das pendências localizadas, indicando quais empresas possuem pendências e o valor total em reais."
                },
                {
                    title: "Tela MIT | Gestão do Processamento do MIT",
                    image: "/projects/zenga/tela_mit.png",
                    info: "Tela de gestão do MIT. Nela, é realizado o envio dos arquivos JSON do MIT, tanto individualmente quanto em lote. O sistema consulta o banco de dados para localizar a task correspondente, vinculando-a pelo nome composto no formato '8 dígitos do CNPJ-MIT-ano-mês'. É possível optar por enviar apenas o MIT ou também solicitar a transmissão da DCTFWeb. A tela permite acompanhar integralmente os processamentos e os status do MIT de todas as empresas. O MIT é armazenado no banco de dados e processado por um serviço conectado diretamente a uma API do Serpro, utilizando o contrato do Zenga e o certificado com procuração da empresa, desde que esteja devidamente cadastrado. Caso ocorram reprocessamentos, os dados do processamento original são armazenados em um array para possíveis auditorias futuras."
                },
                {
                    title: "Tela MIT | Modal de MIT sem Movimento",
                    image: "/projects/zenga/modal_mitsmov.png",
                    info: "Este modal permite solicitar o envio do MIT sem movimento. Assim, não é necessário enviar um arquivo JSON vazio para marcar o MIT como encerrado; basta selecionar a opção e enviar para que o processo seja concluído como sem movimento."
                },
                {
                    title: "Tela DARF - SICALC | Consulta de Guias do MIT",
                    image: "/projects/zenga/tela_darf_sicalc.png",
                    info: "Tela de gestão das guias de impostos geradas a partir do processamento do MIT. É possível acompanhar separadamente cada guia de cada empresa, visualizar seus respectivos valores e o total mensal somado de todas as empresas. A tela também permite o download de todas as guias. O cliente pode ativar ou desativar, a qualquer momento, a geração das guias. Todos os arquivos são armazenados em um bucket do S3, separados por CNPJ e competência. Caso uma nova guia seja gerada após o envio de um novo MIT, o caminho do novo arquivo é atualizado no banco de dados, enquanto o arquivo anterior é mantido no S3 para possíveis auditorias futuras."
                },
                {
                    title: "Tela DCTFWeb | Gestão do Processamento da DCTFWeb",
                    image: "/projects/zenga/tela_dctf.png",
                    info: "Tela de gestão da DCTFWeb. Nela, é possível acompanhar todo o processamento da DCTFWeb proveniente de duas origens diferentes: pela tela do MIT, em que o usuário pode selecionar a opção de também transmitir a DCTFWeb ao enviar o arquivo JSON, ou pelo botão DCTFCore, que não possui vínculo com o MIT. Quando um MIT é enviado sem a opção de transmissão da DCTFWeb, ele aparece nesta tela com o status 'não verificado', aguardando o envio manual, individualmente, ou pelo botão geral 'Transmitir', que processa todas as solicitações em aberto. A tela também apresenta uma contagem que compara o total de empresas cadastradas com o total de empresas que tiveram a DCTFWeb transmitida. Além disso, permite o download dos recibos e segue a mesma lógica de armazenamento no S3 utilizada pelo MIT. Vale destacar que apenas nesta tela é permitida a visualização dos CPFs cadastrados, pois eles não geram MIT, somente DCTFWeb."
                },
                {
                    title: "Tela DCTFWeb | Modal DCTFCore",
                    image: "/projects/zenga/modal_solicitar_dctf.png",
                    info: "Este modal permite solicitar a transmissão da DCTFWeb sem a necessidade de ter realizado o MIT. Após a solicitação, é possível acompanhar quais transmissões foram solicitadas e ainda estão pendentes. Quando o processamento é concluído e passa a ser exibido na tela de acompanhamento, a empresa é removida do modal, evitando solicitações duplicadas."
                },
                {
                    title: "Tela de Empresas",
                    image: "/projects/zenga/tela_empresas.png",
                    info: "Tela de gestão de empresas. Nela, é possível incluir, editar e excluir empresas vinculadas ao cliente. Também é possível alterar, em lote, os certificados vinculados às empresas e definir, individualmente, quais usuários possuem cada empresa em sua carteira. Quando uma empresa é excluída, seus dados são salvos em um histórico, registrando como ela estava no momento da exclusão, quando foi excluída e por quem, para possíveis auditorias futuras."
                },
                {
                    title: "Tela de Certificados",
                    image: "/projects/zenga/tela_certificado.png",
                    info: "Tela de gestão de certificados. Nela, é possível incluir, atualizar e excluir os certificados do cliente. Assim como ocorre com as empresas, são registradas as informações sobre quando o certificado foi excluído e por quem. No entanto, a exclusão não é permitida enquanto houver empresas vinculadas ao certificado; para excluí-lo, é necessário desvincular todas elas."
                },
                {
                    title: "Gestão de Usuários | Tela do Usuário Administrador",
                    image: "/projects/zenga/modal_usuarios.png",
                    info: "Neste modal é realizada a gestão de usuários. Os administradores podem verificar os próprios dados e os dados de todos os usuários existentes, além de incluir e editar usuários. A exclusão não está disponível por solicitação dos superiores. Também é possível gerenciar as carteiras de todos os usuários, abrindo-as individualmente para vincular as empresas desejadas, copiando a carteira de outro usuário ou alterando as carteiras em lote por meio de uma planilha. Além disso, é nesta tela que um usuário pode ser promovido a administrador ou deixar de ser administrador, o próprio usuário, porém, não pode alterar o seu nível de acesso. O usuário administrador não possui restrições de acesso."
                },
                {
                    title: "Gestão de Usuários | Tela do Usuário Não Administrador",
                    image: "/projects/zenga/modal_user_nadmin.png",
                    info: "Este é o modal exibido na visão de um usuário não administrador. Ele pode apenas editar o próprio nome e visualizar todas as empresas que possui em sua carteira. Usuários não administradores não têm permissão para excluir empresas ou certificados e só podem enviar ou reprocessar MIT e DCTFWeb de empresas presentes em suas carteiras. Todas as telas e modais possuem a opção de filtrar por usuário, permitindo visualizar apenas as empresas da carteira selecionada. O filtro não é aplicado automaticamente quando o usuário acessa o sistema, por solicitação dos superiores."
                },

            ],

            techStack: {
                frontend: [
                    { name: "React + Vite", desc: "Base da interface web, focada em alta performance e carregamento rápido." },
                    { name: "Shadcn UI & Tailwind CSS", desc: "Utilizados em conjunto para criar uma interface moderna, padronizada e totalmente responsiva." },
                    { name: "Lucide Icons", desc: "Biblioteca de iconografia leve e consistente para melhorar a UX do sistema." }
                ],
                backend: [
                    { name: "Python (FastAPI)", desc: "Linguagem e framework escolhidos pela altíssima performance, tipagem estática e agilidade na construção de APIs." },
                    { name: "MongoDB Atlas", desc: "Banco de dados NoSQL em nuvem, ideal para armazenar a estrutura dinâmica de logs e documentos fiscais." },
                    { name: "Openpyxl & Boto3", desc: "Geração de planilhas dinâmicas em memória e integração com SDK da AWS." }
                ],
                infra: [
                    { name: "AWS S3", desc: "Armazenamento escalável das guias e recibos processados, categorizados por CNPJ e competência." },
                    { name: "Resend", desc: "Serviço de disparo transacional utilizado para fluxos de criação de usuários e redefinição de senhas via httpx." }
                ]
            },

            architecture: [
                "- Sistema de Autenticação Robusto: Implementação de JWT via cookies HttpOnly com expiração estrita de sessão (1800 segundos / 30 minutos).",
                "- Segurança e Criptografia: Senhas protegidas via hashing com bcrypt, regras fortes de criação e validação criptográfica ponta a ponta.",
                "- Gestão de Certificados Digitais: Leitura em bytes de arquivos .pfx, extraindo chaves públicas/privadas e validando ativamente o vencimento e o vínculo com CNPJ/CPF.",
                "- Otimização de Banco e Armazenamento: Arquivos pesados (PDFs de guias e XMLs de recibos) são armazenados em buckets no S3, salvando no MongoDB apenas os caminhos de acesso para queries mais rápidas.",
                "- Geração de Relatórios Excel: Relatórios .xlsx são gerados de forma dinâmica diretamente na memória RAM e retornados via StreamingResponse, suportando dados gerais ou filtrados sem sobrecarregar o disco do servidor.",
                "- Controle de Concorrência e Auditoria: Uso de locks e geração de IDs únicos (ClientID + CNPJ + Competência) para evitar duplicação em tarefas assíncronas, com registro detalhado de histórico para exclusões e reprocessamentos."

            ],
            
            features: [
                "- Gestão de Transmissões (DCTFWeb e MIT): Leitura inteligente de arquivos JSON, permitindo envio individual ou em lote diretamente para os serviços do Serpro.",
                "- Gestão de Guias e Recibos (Sicalc e DCTFWeb): Acompanhamento detalhado de valores de impostos gerados por empresa, com separação de competências, totalizadores mensais e download centralizado.",
                "- Painel Estratégico (Dashboard): Visão global que consolida status de processamentos, indicadores do e-CAC, pendências previdenciárias e riscos em tempo real.",
                "- Filtros de Carteira Universais: Todas as telas e modais possuem opções de filtro por usuário, exibindo e operando estritamente sobre as empresas pertencentes à carteira selecionada.",
                "- Controle de Acesso Baseado em Cargos (RBAC): Distinção rigorosa entre usuários Administradores (acesso total) e Normais (operações restritas).",
                "- Bloqueios de Status e Sanitização: A interface impede ações duplicadas aguardando o status final do processamento. O sistema conta com utilitários próprios de backend para sanitizar e validar matematicamente documentos e formatações de datas."
            ]
        }
    ];

    return (
        <div className="projects-container">
            <h2 className="section-title">Alguns projetos que desenvolvi</h2>

            <div className="projects-grid">
                {myProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        githubLink={project.githubLink}
                        imageUrl={project.imageUrl}
                        onOpenModal={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </div>
    );
}
