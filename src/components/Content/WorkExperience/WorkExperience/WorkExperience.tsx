import { Badge } from "@/components/Badge/Badge";
import { IWorkExperience } from "@/interfaces/interfaces/IWorkExperience";

interface IWorkExperienceProps {
    workExperience: IWorkExperience;
}

export const WorkExperience: React.FC<IWorkExperienceProps> = ({
    workExperience: { company, description, period, role, technologies }
}) => (
    <div className="flex flex-col justify-center hover:bg-white/5 mt-2 p-4 rounded-lg w-full transition-colors duration-700 cursor-default">
        <h3 className="font-light text-lg text-slate-200">
            {role} @ <span className="text-purple-300">{company}</span>
        </h3>
        <p className="mt-2 font-extralight text-sm text-violet-300">{period}</p>
        <div className="mt-3 text-gray-300 text-justify text-sm leading-6">{description}</div>
        <div className="flex flex-wrap justify-start mt-3">
            {technologies.map((tech, index) => (
                <Badge key={index} text={tech} />
            ))}
        </div>
    </div>
);
