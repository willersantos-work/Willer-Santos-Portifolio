import { Badge } from "@/components/Badge/Badge";
import { IProject } from "@/interfaces/interfaces/IProject";

interface IProjectItemProps {
    project: IProject;
}

export const ProjectItem: React.FC<IProjectItemProps> = ({ project }) => (
    <div className="flex lg:flex-row flex-col sm:flex-col justify-start items-start lg:space-x-8 hover:bg-white/5 mt-2 p-4 rounded-lg w-full transition-colors duration-700 cursor-pointer">
        <div className="mt-2 lg:mt-0">
            <h3 className="flex mt-2 text-white tag-h3-bold">{project.title}</h3>
            <h4 className="mt-2 text-gray-0/90 text-justify tag-h4">{project.description}</h4>
            <div className="flex flex-wrap mt-2">
                {project.technologies.map((tag, index) => (
                    <Badge key={index} text={tag} />
                ))}
            </div>
        </div>
    </div>
);
