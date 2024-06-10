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
                    className={`rounded-lg p-2 text-slate-300 flex font-light cursor-pointer w-48 hover:bg-white/10 hover:rounded-lg transition-all duration-500 hover:font-medium`}
                    href={`#${navigation[item].link}`}
                    key={index}
                >
                    <ChevronDoubleRightIcon className="w-5" /> &ensp; {navigation[item].title}
                </Link>
            ))}
        </div>
    );
};
