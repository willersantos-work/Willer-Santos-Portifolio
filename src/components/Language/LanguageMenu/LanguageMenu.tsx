import { LanguageEnum } from "@/interfaces/enum/Language.enum";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

interface ILanguageMenuProps {
    languages: string[];
    selectedLanguage: LanguageEnum;
    onChangeLanguage: (value: LanguageEnum) => void;
}

export const LanguageMenu: React.FC<ILanguageMenuProps> = ({ languages, selectedLanguage, onChangeLanguage }) => (
    <div className="top-0 right-0 absolute flex gap-4 bg-transparent p-4">
        {languages.map((value: string) => (
            <LanguageSelector
                key={value}
                isSelected={selectedLanguage === value}
                onChangeLanguage={() => onChangeLanguage(value as LanguageEnum)}
                srcImg={`assets/${value}.png`}
            />
        ))}
    </div>
);
