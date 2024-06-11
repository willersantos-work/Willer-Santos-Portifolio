import { Badge } from "@/components/Badge/Badge";
import { useLanguage } from "@/context/language/languageContext";
import { IWorkExperience } from "@/interfaces/interfaces/IWorkExperience";

interface IWorkExperienceProps {
    onChange: (company: string) => void;
    selectedWork?: string;
    workExperience: IWorkExperience;
}

export const WorkExperience: React.FC<IWorkExperienceProps> = ({
    onChange,
    selectedWork,
    workExperience: { company, description, period, role, technologies }
}) => {
    const {
        fixedContent: { workButtonLabel }
    } = useLanguage();

    return (
        <div className="flex flex-col justify-center gap-2.5 hover:bg-white/5 p-4 rounded-lg w-full transition-colors duration-700 cursor-default">
            <div className="flex flex-col gap-1">
                <h3 className="text-white tag-h3-bold">
                    {role} @ <span className="text-purple-1 tag-h3">{company}</span>
                </h3>
                <h6 className="text-purple-2 tag-h6">{period}</h6>
            </div>
            <div className="flex flex-wrap justify-start">
                {technologies.map((tech, index) => (
                    <Badge key={index} text={tech} />
                ))}
            </div>
            <button className="text-purple-3 text-start hover:text-purple-1 tag-h4" onClick={() => onChange(company)}>
                {workButtonLabel}
            </button>
            {selectedWork === company &&
                description.map((paragraph, index) => (
                    <p key={index} className="text-gray-0 text-justify leading-4 tag-p">
                        {paragraph}
                    </p>
                ))}
        </div>
    );
};
