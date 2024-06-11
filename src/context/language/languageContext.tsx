"use client";
import enContent from "@/content/en/main";
import ptContent from "@/content/pt/main";
import { LanguageEnum } from "@/interfaces/enum/Language.enum";
import { IFixedContent } from "@/interfaces/interfaces/IFixedContent";
import { INavigation } from "@/interfaces/interfaces/INavigation";
import { ISummary } from "@/interfaces/interfaces/ISummary";
import { NavigationType } from "@/interfaces/interfaces/NavigationType";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNotification } from "../notification/notificationContext";

interface ILanguageContext {
    content: {
        summary: ISummary;
        navigation: Record<NavigationType, INavigation>;
    };
    fixedContent: IFixedContent;
    onChangeLanguage: (value: LanguageEnum) => void;
    selectedLanguage: LanguageEnum;
}

export const LanguageContext = createContext<ILanguageContext | null>(null);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { notify } = useNotification();
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageEnum>(LanguageEnum.enUS);

    const isEnglish = selectedLanguage === LanguageEnum.enUS;
    const content = isEnglish ? enContent : ptContent;
    const fixedContent: IFixedContent = {
        projectTooltip: isEnglish ? "See more" : "Ver mais",
        workButtonLabel: isEnglish ? "See more" : "Ver mais"
    };

    const onChangeLanguage = (value: LanguageEnum) => {
        setSelectedLanguage(value);
    };

    useEffect(() => {
        console.log(selectedLanguage);
        switch (selectedLanguage) {
            case LanguageEnum.enUS:
                notify("Welcome to Willer Santos portfolio", "info");
                break;
            case LanguageEnum.ptBR:
                notify("Bem-vindo ao portifólio do Willer Santos", "info");
                break;
        }
    }, [selectedLanguage]);

    return (
        <LanguageContext.Provider value={{ content, fixedContent, onChangeLanguage, selectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): ILanguageContext => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
