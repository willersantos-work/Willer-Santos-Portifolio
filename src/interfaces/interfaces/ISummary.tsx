import { ISummaryLink } from "./ISummaryLink";

export interface ISummary {
    fullname: string;
    role: string;
    bio: string;
    company?: string;
    email: ISummaryLink;
    cvLink?: ISummaryLink;
    githubLink?: ISummaryLink;
    linkedinLink?: ISummaryLink;
    mediumLink?: ISummaryLink;
    twitterLink?: ISummaryLink;
    instagramLink?: ISummaryLink;
}
