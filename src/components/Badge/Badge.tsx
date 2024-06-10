interface IBadgeProps {
    text: string;
}

export const Badge: React.FC<IBadgeProps> = ({ text }) => (
    <span className="inline-flex hover:scale-110 flex-shrink-0 items-center bg-purple-400/10 hover:bg-purple-400/20 mt-1 mr-2 mb-2 px-2 py-1 rounded-md max-h-[24px] font-medium text-purple-500 text-xs transition-colors duration-300 cursor-pointer ring-1 ring-inset ring-purple-400/20">
        {text}
    </span>
);