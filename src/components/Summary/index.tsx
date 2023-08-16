import { FC, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

import { navigation } from "@/content/en";

export interface SummaryProps {
    name: string;
    email: string;
    role: string;
    company?: string | null;
    bio: string;
    githubLink: string;
    linkedinLink: string;
    mediumLink: string;
    twitterLink?: string | null;
    instagramLink?: string | null;
}

const Summary:FC<SummaryProps> = ({ name, role, company, bio, githubLink, linkedinLink, mediumLink, twitterLink, instagramLink }) => {
    const { asPath } = useRouter();
    const [activeTab, setActiveTab] = useState<string | null>(null);

    useEffect(() => {
        setActiveTab(asPath.split('#')[1]);
    }, [asPath]);

    return (
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white">
                {name}
            </h1>
            <h2 className="mt-5 text-2xl font-light tracking-tight text-white">
                {role} 
                {!company && <span className="text-slate-500 text-xl ml-4">—</span>}
                <span className="text-slate-500 font-extralight text-xl ml-4">{company ? `@ ${company}` : "Open to work"}</span>
            </h2>
            <p className="mt-6 text-base leading-8  text-slate-400 font-light">
                {bio}
            </p>
            <div className="mt-10 flex flex-col space-y-3">
                <Link 
                    className={`rounded-lg text-slate-400 font-light cursor-pointer w-44 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium ${activeTab === "about" ? "bg-white/10 rounded-lg font-medium" : ""}}`}
                    href="#about"
                >
                    • &ensp; {navigation.about}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-400 font-light cursor-pointer w-44 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium ${activeTab === "skills" ? "bg-white/10 rounded-lg font-medium" : ""}}`}
                    href="#skills"
                >
                    • &ensp; {navigation.skills}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-400 font-light cursor-pointer w-44 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium ${activeTab === "experience" ? "bg-white/10 rounded-lg font-medium" : ""}}`}
                    href="#experience"
                >
                    • &ensp; {navigation.experience}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-400 font-light cursor-pointer w-44 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium ${activeTab === "projects" ? "bg-white/10 rounded-lg font-medium" : ""}}`}
                    href="#projects"
                >
                    • &ensp; {navigation.projects}
                </Link>
            </div>
        </div>
    );
}

export default Summary;