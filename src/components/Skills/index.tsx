import { FC } from "react";

import { skills } from "@/content/skills";

const Skills: FC = () => {
    return (
        <div id="skills">
            <h1 className="mt-20 text-2xl font-base tracking-tight text-white">
                Skills
            </h1>
            <div className="flex flex-wrap justify-start mt-4">
                {
                    skills.map(({name, Icon}, index) => (
                        <div key={index} className="flex flex-col items-center justify-center py-5 pr-8">
                            <Icon className="w-8 h-8 text-cyan-300 hover:text-cyan-200 transition-all" />
                            <p className="mt-2 text-xs font-light tracking-tight text-cyan-400">
                                {name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;