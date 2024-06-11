import { Tooltip } from "@/components/Tooltip/Tooltip";
import { useLanguage } from "@/context/language/languageContext";
import { LanguageEnum } from "@/interfaces/enum/Language.enum";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

interface ILanguageMenuProps {
    languages: string[];
}

export const LanguageMenu: React.FC<ILanguageMenuProps> = ({ languages }) => {
    const { selectedLanguage, onChangeLanguage } = useLanguage();

    return (
        <div className="top-0 right-0 absolute flex gap-4 bg-transparent p-4">
            {languages.map((value: string) => (
                <Tooltip message={value}>
                    <LanguageSelector
                        key={value}
                        isSelected={selectedLanguage === value}
                        onChangeLanguage={() => onChangeLanguage(value as LanguageEnum)}
                        srcImg={`assets/${value}.png`}
                    />
                </Tooltip>
            ))}
        </div>
    );
};
