interface ILanguageSelectorProps {
    isSelected: boolean;
    srcImg: string;
    onChangeLanguage: () => void;
}

export const LanguageSelector: React.FC<ILanguageSelectorProps> = ({ isSelected, onChangeLanguage, srcImg }) => {
    const isSelectedStyle = isSelected ? "cursor-default opacity-50" : "cursor-pointer";

    return (
        <div className={`text-gray-300 hover:text-gray-400 ${isSelectedStyle}`} onClick={onChangeLanguage}>
            <img src={srcImg} className="w-8" />
        </div>
    );
};
