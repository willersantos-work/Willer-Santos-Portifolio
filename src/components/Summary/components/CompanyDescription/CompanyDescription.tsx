interface ICompanyDescriptionProps {
    company?: string;
    role: string;
}

export const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({ company, role }) => (
    <h2 className="flex flex-wrap justify-start items-center gap-2 text-white tracking-tight tag-h2-bold">
        {role} @<span className="text-purple-1 tag-h2">{company ? `${company}` : "Open to work"}</span>
    </h2>
);
