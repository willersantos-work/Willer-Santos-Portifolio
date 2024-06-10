import { IContentItem } from "@/interfaces/interfaces/IContentItem";
import { FC } from "react";
import { SessionTitle } from "../SessionTitle/SessionTitle";

interface IAboutMeProps {
    about: IContentItem[];
    link: string;
    title: string;
}

export const AboutMe: FC<IAboutMeProps> = ({ about, link, title }) => (
    <div id={link}>
        <SessionTitle title={title} />
        {about.map(({ item }, index) => (
            <p key={index} className="mt-4 text-justify text-zinc-200/90 leading-8">
                {item}
            </p>
        ))}
    </div>
);
