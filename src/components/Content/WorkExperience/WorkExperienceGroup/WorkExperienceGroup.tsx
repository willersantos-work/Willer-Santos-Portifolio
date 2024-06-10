import { IWorkExperience } from "@/interfaces/interfaces/IWorkExperience";
import { SessionTitle } from "../../SessionTitle/SessionTitle";
import { WorkExperience } from "../WorkExperience/WorkExperience";

interface IWorkExperienceGroupProps {
    link: string;
    title: string;
    workExperiences: IWorkExperience[];
}

export const WorkExperienceGroup: React.FC<IWorkExperienceGroupProps> = ({ link, title, workExperiences }) => (
    <div id={link}>
        <SessionTitle title={title} />
        <div className="flex flex-wrap justify-start mt-4">
            {workExperiences.map((workExperience, index) => (
                <WorkExperience key={index} workExperience={workExperience} />
            ))}
        </div>
    </div>
);
