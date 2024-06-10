import { Badge } from "@/components/Badge/Badge";
import { IProject } from "@/interfaces/interfaces/IProject";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface IProjectLink extends Omit<IProject, "url"> {
    url: string;
}

interface IProjectLinkProps {
    project: IProjectLink;
}

export const ProjectLink: React.FC<IProjectLinkProps> = ({ project }) => (
    <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex lg:flex-row flex-col sm:flex-col justify-start items-start lg:space-x-8 hover:bg-white/5 mt-2 p-4 rounded-lg w-full w-full transition-colors duration-700 cursor-pointer"
    >
        <div className="mt-2 lg:mt-0">
            <h1 className="flex mt-2 font-semibold text-lg text-white">
                {project.title} <ArrowUpRightIcon className="ml-2 w-5" />
            </h1>
            <p className="mt-2 font-normal text-justify text-sm text-zinc-200/90">{project.description}</p>
            <div className="flex flex-wrap mt-2">
                {project.technologies.map((tag, index) => (
                    <Badge key={index} text={tag} />
                ))}
            </div>
        </div>
    </Link>
);
