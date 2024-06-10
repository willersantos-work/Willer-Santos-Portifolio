interface ICompanyDescriptionProps {
    company?: string;
    role: string;
}

export const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({ company, role }) => (
    <h2 className="flex flex-wrap justify-start items-center gap-2 font-light text-2xl text-white tracking-tight">
        {role} @
        <span className="font-extralight text-purple-300 text-xl">{company ? `${company}` : "Open to work"}</span>
    </h2>
);
