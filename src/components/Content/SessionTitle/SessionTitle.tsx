interface ISessionTitleProps {
    title: string;
}

export const SessionTitle: React.FC<ISessionTitleProps> = ({ title }) => (
    <h2 className="pt-12 lg:pt-20 text-purple-1 tracking-tight tag-h2-bold">{title}</h2>
);
