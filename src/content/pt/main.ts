import { INavigation } from "@/interfaces/interfaces/INavigation";
import { ISummary } from "@/interfaces/interfaces/ISummary";
import { NavigationType } from "@/interfaces/interfaces/NavigationType";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Skills as skills } from "../shared/skills";
import { AboutMe as aboutMe } from "./aboutMe";
import { Projects as projects } from "./projects";
import { WorkExperience as workExperience } from "./workExperience";

const navigation: Record<NavigationType, INavigation> = {
    aboutMe: { title: "Sobre", link: "about-me", content: aboutMe },
    skills: { title: "Habilidades", link: "skills", content: skills },
    workExperience: { title: "Experiência", link: "work-experience", content: workExperience },
    projects: { title: "Projetos", link: "projects", content: projects }
};

const summary: ISummary = {
    fullname: "Willer Poveda Santos",
    role: "Engenheiro de Software",
    bio: "Engenheiro de Software com + de 3 anos de experiência na área, tendo como maiores esferas de interesse a gestão de projetos e o desenvolvimento de software.",
    // company: "igc Partners",
    githubLink: { icon: FaSquareGithub, title: "https://github.com/willersantos-work" },
    linkedinLink: { icon: FaLinkedin, title: "https://www.linkedin.com/in/willer-santos-06a374190/" },
    email: { icon: MdEmail, isEmail: true, title: "willer.santos.work@gmail.com" }
};

export default { summary, navigation };
