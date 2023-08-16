import { FC } from "react";

import { aboutMe } from "@/content/en";

const About:FC = () => {
    return (
        <div id="about">
            <h1 className="pt-20 text-2xl font-base tracking-tight text-cyan-200">
                About me
            </h1>
            {aboutMe.map((paragraph, index) => (
                <p key={index} className="text-slate-400 leading-8 mt-4">
                    {paragraph}
                </p>
            ))}
        </div>
    );
}

export default About;