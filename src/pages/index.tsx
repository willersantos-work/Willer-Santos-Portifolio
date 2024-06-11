import { AboutMe } from "@/components/Content/AboutMe/AboutMe";
import { ProjectGroup } from "@/components/Content/Projects/ProjectGroup/ProjectGroup";
import { SkillGroup } from "@/components/Content/Skills/SkillGroup/SkillGroup";
import { WorkExperienceGroup } from "@/components/Content/WorkExperience/WorkExperienceGroup/WorkExperienceGroup";
import { LanguageMenu } from "@/components/Language/LanguageMenu/LanguageMenu";
import { Summary } from "@/components/Summary/Summary";
import { useLanguage } from "@/context/language/languageContext";
import { LanguageEnumFunc } from "@/interfaces/enum/Language.enum";
import { IContentItem } from "@/interfaces/interfaces/IContentItem";
import { IProject } from "@/interfaces/interfaces/IProject";
import { IWorkExperience } from "@/interfaces/interfaces/IWorkExperience";
import { useEffect, useRef } from "react";

const Home: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { content } = useLanguage();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <>
            <div className="flex md:flex-row lg:flex-row flex-col md:justify-evenly lg:justify-evenly px-2 md:px-6 lg:px-8 max-w-10xl h-screen overflow-auto">
                <Summary navigation={content.navigation} summary={content.summary} />
                <div className="flex-shrink-0 mx-auto lg:mx-0 p-3 md:p-6 lg:p-6 md:w-1/2 lg:w-1/2 max-w-2xl lg:max-w-4xl overflow-y-scroll">
                    <AboutMe
                        about={content.navigation.aboutMe.content as IContentItem[]}
                        link={content.navigation.aboutMe.link}
                        title={content.navigation.aboutMe.title}
                    />
                    <SkillGroup
                        link={content.navigation.skills.link}
                        title={content.navigation.skills.title}
                        skills={content.navigation.skills.content as IContentItem[]}
                    />
                    <WorkExperienceGroup
                        link={content.navigation.workExperience.link}
                        title={content.navigation.workExperience.title}
                        workExperiences={content.navigation.workExperience.content as IWorkExperience[]}
                    />
                    <ProjectGroup
                        link={content.navigation.projects.link}
                        title={content.navigation.projects.title}
                        projects={content.navigation.projects.content as IProject[]}
                    />
                </div>
            </div>
            <LanguageMenu languages={LanguageEnumFunc.getValues()} />
        </>
    );
};

export default Home;
