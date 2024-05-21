import { twMerge } from "tailwind-merge";

interface FooterProps {
    children?: React.ReactNode;
    className?: string;
}

const PlaylistFooter: React.FC<FooterProps> = ({
    children,
    className
}) => {
    return (
        <div className={twMerge( `w-full p-4 bg-gradient-to-t`, className )}>
            
            playlist footer

        </div>
    );
    {
        /*
            - search
            - arrow_down
            - menu? (settings, playlist, library, account? )
        */
    }
};

export default PlaylistFooter;