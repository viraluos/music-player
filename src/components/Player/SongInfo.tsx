"use client"

import { twMerge } from "tailwind-merge";
import supabase from "@/utils/supabase";

interface SongProps {
    children?: React.ReactNode;
    className?: string;
}

const SongInfo: React.FC<SongProps> = ({
    children,
    className
}) => {
    return (
        <div className={twMerge( ``, className )}>
            <div>song image?</div>
            <div>song title</div>
            <div>author</div>
            <div>timing progress bar</div>
            <div>controls</div>
        </div>
    );
};

export default SongInfo;

