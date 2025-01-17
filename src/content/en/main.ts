import { INavigation } from "@/interfaces/interfaces/INavigation";
import { ISummary } from "@/interfaces/interfaces/ISummary";
import { NavigationType } from "@/interfaces/interfaces/NavigationType";
import { FaFile, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Skills as skills } from "../shared/skills";
import { AboutMe as aboutMe } from "./aboutMe";
import { Projects as projects } from "./projects";
import { WorkExperience as workExperience } from "./workExperience";

const navigation: Record<NavigationType, INavigation> = {
    aboutMe: { title: "About me", link: "about-me", content: aboutMe },
    skills: { title: "Skills", link: "skills", content: skills },
    workExperience: { title: "Work experience", link: "work-experience", content: workExperience },
    projects: { title: "Projects", link: "projects", content: projects }
};

const summary: ISummary = {
    fullname: "Willer Poveda Santos",
    role: "Software Engineer",
    bio: "I am a Software Engineer with 3+ years of experience in the field. My biggest spheres of interest in this area are software development and project management.",
    // company: "igc Partners",
    cvLink: {
        icon: FaFile,
        message: "Open CV",
        title: "https://drive.google.com/file/d/1hXmXEgkZ_5LvmyIo-AsXnsLFzBDI2q-W/view?usp=sharing"
    },
    githubLink: { icon: FaSquareGithub, message: "Open GitHub", title: "https://github.com/willersantos-work" },
    linkedinLink: {
        icon: FaLinkedin,
        message: "Open LinkedIn",
        title: "https://www.linkedin.com/in/willer-santos-06a374190/"
    },
    email: { icon: MdEmail, isEmail: true, message: "Open email", title: "willer.santos.work@gmail.com" }
};

export default { summary, navigation };
