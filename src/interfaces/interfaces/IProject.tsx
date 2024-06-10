import { TechnologyType } from "./Technology.enum";

export interface IProject {
    title: string;
    description: string;
    url?: string;
    technologies: TechnologyType[];
}
