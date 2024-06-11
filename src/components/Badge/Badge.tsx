interface IBadgeProps {
    text: string;
}

export const Badge: React.FC<IBadgeProps> = ({ text }) => (
    <h5 className="inline-flex hover:scale-110 flex-shrink-0 items-center bg-purple-3/10 hover:bg-purple-3/20 mt-1 mr-2 mb-2 px-2 py-1 rounded-md max-h-[24px] text-purple-4 transition-colors duration-300 cursor-pointer ring-1 ring-inset ring-purple-3/20 tag-h5">
        {text}
    </h5>
);
