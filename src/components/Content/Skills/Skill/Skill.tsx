import { IconType } from "react-icons";

interface ISkillProps {
    Icon?: IconType;
    name: string;
}

export const Skill: React.FC<ISkillProps> = ({ Icon, name }) => (
    <div className="flex flex-col justify-center items-center py-5 pr-8 transition-all duration-500 cursor-pointer group hover:scale-110">
        {Icon && <Icon className="group-hover:text-purple-500 w-8 h-8 text-purple-200" />}
        <p className="group-hover:text-purple-500 mt-2 font-light text-purple-400 text-xs tracking-tight">{name}</p>
    </div>
);
