export enum LanguageEnum {
    ptBR = "pt-BR",
    enUS = "en-US"
}

export class LanguageEnumFunc {
    static getValues(): string[] {
        return Object.values(LanguageEnum);
    }
}
