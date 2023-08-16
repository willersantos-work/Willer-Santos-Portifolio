import { FC } from "react"

import BackgroundPattern from "@/components/BackgroundPattern"
import Summary from "@/components/Summary"
import { summary } from "@/content/en"

const Home:FC = () => {
    return(
        <div className="relative isolate overflow-hidden bg-gray-900">
            <BackgroundPattern />
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-15 flex justify-between">
                <Summary
                    name={summary.name}
                    email={summary.email}
                    role={summary.role}
                    company={summary.company}
                    bio={summary.bio}
                    githubLink={summary.githubLink}
                    linkedinLink={summary.linkedinLink}
                    mediumLink={summary.mediumLink}
                    twitterLink={summary.twitterLink}
                    instagramLink={summary.instagramLink}
                />
                <Summary
                    name={summary.name}
                    email={summary.email}
                    role={summary.role}
                    company={summary.company}
                    bio={summary.bio}
                    githubLink={summary.githubLink}
                    linkedinLink={summary.linkedinLink}
                    mediumLink={summary.mediumLink}
                    twitterLink={summary.twitterLink}
                    instagramLink={summary.instagramLink}
                />
            </div>
        </div>
    )
}

export default Home;
