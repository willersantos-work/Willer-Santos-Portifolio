import { IContentItem } from "./IContentItem";
import { IProject } from "./IProject";
import { IWorkExperience } from "./IWorkExperience";

export interface INavigation {
    title: string;
    link: string;
    content: (IContentItem | IProject | IWorkExperience)[];
}
