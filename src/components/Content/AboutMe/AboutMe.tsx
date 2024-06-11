import { IContentItem } from "@/interfaces/interfaces/IContentItem";
import { SessionTitle } from "../SessionTitle/SessionTitle";

interface IAboutMeProps {
    about: IContentItem[];
    link: string;
    title: string;
}

export const AboutMe: React.FC<IAboutMeProps> = ({ about, link, title }) => (
    <div id={link}>
        <SessionTitle title={title} />
        {about.map(({ item }, index) => (
            <p key={index} className="mt-4 text-gray-0/90 text-justify leading-8 tag-h3">
                {item}
            </p>
        ))}
    </div>
);
