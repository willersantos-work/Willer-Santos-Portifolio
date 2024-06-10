import { IContentItem } from "@/interfaces/interfaces/IContentItem";
import {
    SiAmazonaws,
    SiAwsamplify,
    SiAwslambda,
    SiDocker,
    SiJavascript,
    SiMongodb,
    SiNestjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiServerless,
    SiTypescript
} from "react-icons/si";

export const Skills: IContentItem[] = [
    {
        item: "Javascript",
        icon: SiJavascript
    },
    {
        item: "Typescript",
        icon: SiTypescript
    },
    {
        item: "Python",
        icon: SiPython
    },
    {
        item: "Node.js",
        icon: SiNodedotjs
    },
    {
        item: "Nest.js",
        icon: SiNestjs
    },
    {
        item: "React",
        icon: SiReact
    },
    {
        item: "Serverless",
        icon: SiServerless
    },
    {
        item: "Docker",
        icon: SiDocker
    },
    // {
    //     item: "Github Actions",
    //     icon: SiGithubactions,
    // },
    {
        item: "AWS",
        icon: SiAmazonaws
    },
    {
        item: "Amplify",
        icon: SiAwsamplify
    },
    {
        item: "Lambda",
        icon: SiAwslambda
    },
    {
        item: "PostgreSQL",
        icon: SiPostgresql
    },
    {
        item: "MongoDB",
        icon: SiMongodb
    }
];
