export enum LanguageEnum {
    ptBR = "Portugues",
    enUS = "Inglês"
}

export class LanguageEnumFunc {
    static getValues(): string[] {
        return Object.values(LanguageEnum);
    }
}
