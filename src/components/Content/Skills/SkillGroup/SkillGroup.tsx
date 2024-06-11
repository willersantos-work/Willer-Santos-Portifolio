import { IContentItem } from "@/interfaces/interfaces/IContentItem";
import { SessionTitle } from "../../SessionTitle/SessionTitle";
import { Skill } from "../Skill/Skill";

interface ISkillGroupProps {
    link: string;
    skills: IContentItem[];
    title: string;
}

export const SkillGroup: React.FC<ISkillGroupProps> = ({ link, skills, title }) => (
    <div id={link}>
        <SessionTitle title={title} />
        <div className="flex flex-wrap justify-start bg-black/20 mt-4 p-4 rounded-xl w-fit">
            {skills.map(({ icon: Icon, item }, index) => (
                <Skill key={index} Icon={Icon} name={item} />
            ))}
        </div>
    </div>
);
