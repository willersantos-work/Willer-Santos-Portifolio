import { INavigation } from "@/interfaces/interfaces/INavigation";
import { ISummary } from "@/interfaces/interfaces/ISummary";
import { NavigationType } from "@/interfaces/interfaces/NavigationType";
import { CompanyDescription } from "./components/CompanyDescription/CompanyDescription";
import { FastMenu } from "./components/FastMenu/FastMenu";
import { Footer } from "./components/Footer/Footer";

interface ISummaryProps {
    summary: ISummary;
    navigation: Record<NavigationType, INavigation>;
}

export const Summary: React.FC<ISummaryProps> = ({ summary, navigation }) => (
    <div className="flex flex-col justify-evenly md:justify-evenly lg:justify-center items-start gap-8 bg-black/10 p-8 rounded-xl w-full max-w-2xl lg:max-w-xl h-auto">
        <div className="flex flex-col items-start h-auto">
            <h1 className="pb-4 text-white tracking-tight tag-h1">{summary.fullname}</h1>
            <CompanyDescription company={summary?.company} role={summary.role} />
            <h3 className="py-2 h-auto md:h-0 lg:h-auto lg:visible text-gray-0/90 text-justify leading-8 md:invisible tag-h3 visible">
                {summary.bio}
            </h3>
        </div>
        <FastMenu navigation={navigation} />
        <Footer summary={summary} />
    </div>
);
