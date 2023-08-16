import { FC, useRef, useEffect } from "react"

import BackgroundPattern from "@/components/BackgroundPattern"
import Summary from "@/components/Summary"
import About from "@/components/About"
import Skills from "@/components/Skills"
import WorkExperience from "@/components/WorkExperience"
import Projects from "@/components/Projects"

const Home:FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash && ref.current) {
            ref.current.scrollIntoView({ behavior: "auto", block: "start" });
        }
    }, []);

    return(
        <div className="relative isolate overflow-hidden bg-gray-900">
            <title>Bruno Koga | Software Engineer</title>
            <BackgroundPattern />
            <div className="mx-auto sm:overflow-auto max-w-10xl h-screen px-6 pb-24 pt-10 sm:pb-32 lg:flex md:flex lg:justify-evenly md:justify-evenly lg:px-8 lg:py-15">
                <Summary />
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-4xl lg:w-1/2 md:w-1/2  p-5 overflow-y-scroll">
                    <About />
                    <Skills />
                    <WorkExperience />
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Home;
