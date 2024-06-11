import { TechnologyType } from "./Technology.enum";

export interface IWorkExperience {
    company: string;
    role: string;
    period: string;
    description: string[];
    technologies: TechnologyType[];
}
