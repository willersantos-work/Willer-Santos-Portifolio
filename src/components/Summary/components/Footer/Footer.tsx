import { Tooltip } from "@/components/Tooltip/Tooltip";
import { ISummary } from "@/interfaces/interfaces/ISummary";
import { ISummaryLink } from "@/interfaces/interfaces/ISummaryLink";

interface IFooterProps {
    summary: ISummary;
}

export const Footer: React.FC<IFooterProps> = ({ summary }) => {
    const footerItems: (keyof ISummary)[] = [
        "cvLink",
        "instagramLink",
        "githubLink",
        "linkedinLink",
        "mediumLink",
        "twitterLink",
        "email"
    ];

    return (
        <div className="flex flex-row gap-2.5">
            {footerItems.map((itemName, index) => {
                const item = summary?.[itemName] as ISummaryLink;
                const Icon = item?.icon;

                if (item && Icon)
                    return (
                        <a
                            key={index}
                            href={`${item?.isEmail ? "mailto:" : ""}${item?.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-white/10 p-1.5 rounded-md text-white hover:text-gray-0/90 transition-all duration-300"
                        >
                            <Tooltip message={item.message}>
                                <Icon size={24} />
                            </Tooltip>
                        </a>
                    );
            })}
        </div>
    );
};
