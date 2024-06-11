import { IWorkExperience } from "@/interfaces/interfaces/IWorkExperience";

export const WorkExperience: IWorkExperience[] = [
    {
        company: "igc Partners",
        role: "Software Engineer",
        period: "Jan 2023 — Jun 2024",
        description: [
            "Desenvolvi vários sistemas para a área de RH, incluindo um sistema de gerenciamento de colaboradores, um sistema de solicitação de férias, um sistema de alocação de equipes, um histórico de promoções e algumas automações, como automação para preenchimento de contratos.",
            "Além disso, construí e gerenciei um sistema de solicitação de despesas para a área financeira, disponível para plataformas web e móvel, onde pude ser responsável pelo desenvolvimento de backlog de projetos e coordenação de equipes.",
            "Melhorei o desempenho do site brasileiro da empresa (igcp.com.br) aprimorando a infraestrutura, liderando uma migração de React com Vite para Next e implementando um CDN para entrega de imagens.",
            "Por fim, liderei o time de devs do site da empresa nos EUA (igcp.com) e coordenei decisões estratégicas."
        ],
        technologies: [
            "React",
            "Next.js",
            "Node.js (Nest)",
            "Tailwind",
            "CMS",
            "Figma",
            "PostgreSQL",
            "GitHub Actions",
            "CI/CD",
            "Docker",
            "AWS ECS",
            "AWS EC2",
            "AWS Lambda",
            "Serverless",
            "RabbitMQ",
            "Amplify",
            "APM",
            "SonarQube",
            "Python"
        ]
    },
    {
        company: "BTG Pactual",
        role: "IT Intern",
        period: "Set 2021 — Dez 2021 | Mai 2022 — Ago 2022",
        description: [
            "Desenvolvimento de execuções desde de desenvolvimento até produção seguindo o método Scrum, utilizando ferramentas como Postman, AWS (Lambda e CloudWatch), Azure (Build e Release) e Git"
        ],
        technologies: ["React", ".Net Core", "Kubernetes", "Jenkins", "CI/CD", "PostgreSQL"]
    },
    {
        company: "Poli Júnior",
        role: "Organizador 31º Workshop Integrativo",
        period: "Fev 2021 — Set 2021",
        description: [
            "Atuação na organização da análise de dados (estruturação do uso de dados e estratégia de coleta de dados).",
            "Participação como meio de comunicação com as empresas, para acompanhamento de vendas e organização das empresas no evento."
        ],
        technologies: ["Data analysis", "Python"]
    },
    {
        company: "Poli Júnior",
        role: "Analista de Projetos",
        period: "Ago 2020 — Set 2021",
        description: [
            "Execução de projetos com React, React Native e Node (Express) em estrutura de tribo",
            "Participação em projetos de ideação de sites e apps com Figma",
            "Planejamento de projetos, como modelagem de banco de dados, documentação e desenvolvimento de backlog de tarefas."
        ],
        technologies: ["React", "React Native", "Node.js (Express)", "PostgreSQL", "Figma", "Design Thinking"]
    }
];
