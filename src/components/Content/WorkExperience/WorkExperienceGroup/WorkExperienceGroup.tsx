import { IWorkExperience } from "@/interfaces/interfaces/IWorkExperience";
import { useState } from "react";
import { SessionTitle } from "../../SessionTitle/SessionTitle";
import { WorkExperience } from "../WorkExperience/WorkExperience";

interface IWorkExperienceGroupProps {
    link: string;
    title: string;
    workExperiences: IWorkExperience[];
}

export const WorkExperienceGroup: React.FC<IWorkExperienceGroupProps> = ({ link, title, workExperiences }) => {
    const [selectedWork, setSelectedWork] = useState<string>();

    return (
        <div id={link}>
            <SessionTitle title={title} />
            <div className="flex flex-wrap justify-start mt-4">
                {workExperiences.map((workExperience, index) => (
                    <WorkExperience
                        key={index}
                        onChange={(companyAndRole) =>
                            setSelectedWork(companyAndRole === selectedWork ? undefined : companyAndRole)
                        }
                        selectedWork={selectedWork}
                        workExperience={workExperience}
                    />
                ))}
            </div>
        </div>
    );
};
