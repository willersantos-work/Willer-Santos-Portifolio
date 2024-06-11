import { Tooltip } from "@/components/Tooltip/Tooltip";
import { IProject } from "@/interfaces/interfaces/IProject";
import { SessionTitle } from "../../SessionTitle/SessionTitle";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import { ProjectLink } from "../ProjectLink/ProjectLink";

interface IProjectGroupProps {
    link: string;
    projects: IProject[];
    title: string;
}

export const ProjectGroup: React.FC<IProjectGroupProps> = ({ link, projects, title }) => (
    <div id={link}>
        <SessionTitle title={title} />
        <div className="flex flex-wrap justify-start space-y-4 mt-4">
            {projects.map((project, index) =>
                project.url ? (
                    <Tooltip key={index} message="Ver mais">
                        <ProjectLink project={project as any} />
                    </Tooltip>
                ) : (
                    <ProjectItem key={index} project={project} />
                )
            )}
        </div>
    </div>
);
