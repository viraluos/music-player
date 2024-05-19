import { twMerge } from "tailwind-merge";

import Elements from "./Playlist/Elements";

interface PlaylistProps {
    children?: React.ReactNode;
    className?: string;
}

const Playlist: React.FC<PlaylistProps> = ({
    children,
    className
}) => {
    return (        
        <div className={twMerge( `w-full h-full`, className )}>
            
            < Elements />
            
        </div>
    );
};

export default Playlist;