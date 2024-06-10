interface ISessionTitleProps {
    title: string;
}

export const SessionTitle: React.FC<ISessionTitleProps> = ({ title }) => (
    <h1 className="pt-12 lg:pt-20 font-base text-2xl text-purple-300 tracking-tight">{title}</h1>
);
