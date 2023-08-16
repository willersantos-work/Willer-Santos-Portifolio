export const summary = {
    name: "Bruno Henrique Koga Fazano",
    role: "Engenheiro de Software",
    bio: "Engenheiro de Software com mais de 3 anos de experiência na área, apaixonado por tecnologia e sempre em busca de novos desafios e oportunidades para aprender e crescer.",
    company: null,
    githubLink: "https://github.com/bhkfazano",
    linkedinLink: "https://www.linkedin.com/in/bruno-henrique-koga-fazano-31a80114a/",
    email: "bruno.koga.fazano@gmail.com",
    mediumLink: "https://medium.com/@bhkfazano",
    twitterLink: null,
    instagramLink: null
};

export const navigation = {
    about: "Sobre mim",
    skills: "Habilidades",
    experience: "Experiência",
    projects: "Projetos"
};

export const aboutMe = [
    "Formado em Engenharia Elétrica com ênfase em Computação (Universidade de São Paulo), tenho grande fascínio e entusiasmo por tecnologia. Sou curioso, inventivo, criativo, versátil, comunicativo e estou sempre em busca de novos desafios. Venho trabalhando com NodeJs, React, TypeScript, Docker e AWS há quase 4 anos, com um histórico de sucesso.",
    "Construí diversos sistemas bem-sucedidos e confiáveis usando essa stack, em conjunto com bancos de dados SQL e NoSQL e seguindo princípios de Clean Code. Tenho ampla experiência em escrever código escalável e eficiente, pronto para ambiente produtivo.",
    "Atualmente resido em São Paulo, Brasil, e estou aberto a novas oportunidades."
];

export const workExperience = [
    {
        company: "igc Partners",
        role: "Engenheiro de Software",
        period: "Jan 2022 — Jun 2023",
        description: "Entrega de sistemas robustos de alta qualidade, prontos para produção, para diferentes áreas dentro da empresa. Trabalhei principalmente com TypeScript, React, NodeJs, NestJs, PostgreSQL, Docker e AWS. Realizei reuniões semanais com as partes interessadas da empresa para levantar requisitos e discutir o progresso dos projetos. Criei padrões e melhores práticas para os projetos frontend e backend da empresa. Também fui responsável pela criação de pipelines de continuous delivery com GitHub Actions, AWS ElasticBeanstalk, EC2 e Lambda. Treinei e liderei uma equipe de 6 desenvolvedores juniores.",
        technologies: ["React", "NestJs", "Tailwind", "ElasticBeanstalk", "GitHub Actions", "AWS Lambda", "Docker", "PostgreSQL", "Python", "NodeJs"]
    },
    {
        company: "igc Partners",
        role: "Desenvolvedor Fullstack",
        period: "Jan 2021 — Dez 2021",
        description: "Desenvolvi um sistema de recrutamento usado pela equipe de RH da empresa para gerenciar um processo de recrutamento especial. O sistema foi construído usando React, Python e Serverless Framework. Implantei o sistema na AWS usando Lambda, DynamoDB e Amplify. Também trabalhei com Python, NodeJs, Serverless e Lambda para criar automações, relatórios e integrações com outros sistemas.",
        technologies: ["React", "Python", "NodeJs", "Serverless", "AWS Lambda", "DynamoDB", "Amplify"]
    },
    {
        company: "theVelops",
        role: "Desenvolvedor Fullstack",
        period: "Jan 2018 — Ago 2018",
        description: "Trabalhei com a equipe de desenvolvimento da empresa para construir aplicações web para clientes usando React, NodeJs, MongoDB e AWS. Minhas principais responsabilidades eram desenvolver novos recursos e corrigir erros no frontend e backend das aplicações. Também liderei o desenvolvimento de algumas automações usando Serverless Framework, AWS Lambda e Redis.",
        technologies: ["React", "NodeJs", "MongoDB", "AWS Lambda", "Serverless", "Redis"]
    },
];

export const projects = [
    {
        title: "Inspirar",
        description: "Sistema composto por um aplicativo móvel (para pacientes) e um aplicativo web (para profissionais de saúde). O objetivo do projeto é ajudar pacientes e profissionais a gerenciar e monitorar doenças respiratórias como a asma. O projeto foi uma parceria entre o Hospital da Universidade de São Paulo e nós, financiado pela AstraZeneca. Trabalhei neste projeto por um ano como desenvolvedor fullstack e líder de equipe, definindo a arquitetura, criando padrões e melhores práticas, e liderando uma equipe de quatro desenvolvedores.",
        url: "https://inspirar.app.br/",
        technologies: ["React", "NodeJs", "Python", "Serverless", "React Native", "Expo", "AWS Lambda", "DynamoDB"],
        image: "inspirar.png"
    },
    {
        title: "CodeDepot",
        description: "CodeDepot é uma plataforma que permite aos desenvolvedores compartilhar seu código com a comunidade. O objetivo do projeto é facilitar o armazenamento e compartilhamento de trechos de código úteis para outros desenvolvedores.",
        url: "https://www.codedepot.app",
        technologies: ["React", "NestJs", "PostgreSQL", "Docker", "AWS ElasticBeanstalk", "Tailwind"],
        image: "codedepot.png"
    }
];
