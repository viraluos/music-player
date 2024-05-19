import { twMerge } from "tailwind-merge";

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

const PlaylistHeader: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    return (
        <div className={twMerge( `text-5xl p-4 bg-gradient-to-b`, className )}>
        
            Bentornato.
            
        </div>
    );
    {
        /*
            - title
        */
    }
};

export default PlaylistHeader;