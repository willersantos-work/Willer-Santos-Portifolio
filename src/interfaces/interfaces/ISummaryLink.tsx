import { IconType } from "react-icons";

export interface ISummaryLink {
    icon?: IconType;
    isEmail?: boolean;
    message: string;
    title: string;
}
