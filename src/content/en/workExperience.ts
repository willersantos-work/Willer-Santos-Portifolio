import { IWorkExperience } from "@/interfaces/interfaces/IWorkExperience";

export const WorkExperience: IWorkExperience[] = [
    {
        company: "igc Partners",
        role: "Software Engineer",
        period: "Jan 2023 — Jun 2024",
        description: [
            "I developed various systems for HR field, including a 'collaborator manager system', a 'vacation request system', a 'team allocation system', a 'promotion history', and some automations, such as 'admission contract filler'.",
            "Additionally, I built and managed an 'expense request system' for the finance field, available for both web and mobile platforms, where I could be responsible for project backlog development and team coordination.",
            "I improved the performance of the corporation's Brazilian website (igcp.com.br) by enhancing the infrastructure, leading a migration from React with Vite to Next, and implementing a CDN for image delivery.",
            "Furthermore, I supported the developer team for the corporation's US website (igcp.com) and coordinated strategic decisions."
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
            "SonarQube",
            "Python"
        ]
    },
    {
        company: "BTG Pactual",
        role: "IT Intern",
        period: "Sep 2021 — Dec 2021 | May 2022 — Aug 2022",
        description: [
            "I developed tasks from development environment to production environment following Scrum with a range of tools such as (I) Postman; (II) AWS Lambda and CloudWatch; (III) Azure pipelines (Build and Release); and (IV) Git."
        ],
        technologies: ["React", ".Net Core", "Kubernetes", "Jenkins", "CI/CD", "PostgreSQL"]
    },
    {
        company: "Poli Júnior",
        role: "31 WI Planner",
        period: "Feb 2021 — Sep 2021",
        description: [
            "I worked on the organization of visitor’s data analysis by structuring data collecting strategies with the goal of getting visitor’s data efficiently",
            "I took part in a channel with medium and large-sized companies with the purpose of monitoring and leading sales to these potential event sponsors. Also managed company’s participation in the event."
        ],
        technologies: ["Data analysis", "Python"]
    },
    {
        company: "Poli Júnior",
        role: "Project Analyst",
        period: "Aug 2020 — Sep 2021",
        description: [
            "I build projects up with different Frameworks, such as React, React Native and NodeJS (Express) with Tribe structure.",
            "I worked in web and app design system projects by using Figma and FigmaJam under the Design Thinking Methodology.",
            "I planned projects, such as (I) database modeling, (II) project documentation and (III) structure task backlog."
        ],
        technologies: ["React", "React Native", "Node.js (Express)", "PostgreSQL", "Figma", "Design Thinking"]
    }
];
