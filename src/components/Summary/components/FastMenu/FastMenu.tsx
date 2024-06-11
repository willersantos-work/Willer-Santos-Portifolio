import { INavigation } from "@/interfaces/interfaces/INavigation";
import { NavigationType } from "@/interfaces/interfaces/NavigationType";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface IFastMenuProps {
    navigation: Record<NavigationType, INavigation>;
}

export const FastMenu: React.FC<IFastMenuProps> = ({ navigation }) => {
    const summaryItems: NavigationType[] = ["aboutMe", "skills", "workExperience", "projects"];

    return (
        <div className="flex flex-col pl-4">
            {summaryItems.map((item, index) => (
                <Link
                    className={`rounded-lg p-2 text-gray-0 flex tag-h3 cursor-pointer w-52 hover:text-white hover:bg-white/10 hover:rounded-lg transition-all duration-500`}
                    href={`#${navigation[item].link}`}
                    key={index}
                >
                    <ChevronDoubleRightIcon className="w-5" /> &ensp; {navigation[item].title}
                </Link>
            ))}
        </div>
    );
};
