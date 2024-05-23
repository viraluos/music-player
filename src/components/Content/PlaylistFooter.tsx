"use client";

import { twMerge } from "tailwind-merge";

import { MyUserContextProvider } from "@/hooks/useUser";

import SearchInput from "../SearchInput";
import AccountButtons from "./Playlist/AccountButtons";


interface FooterProps {
    children?: React.ReactNode;
    className?: string;
}  

const PlaylistFooter: React.FC<FooterProps> = ({
    children,
    className
}) => {
     
    return (
        <div className={twMerge( `w-full p-4 bg-gradient-to-t flex justify-between`, className )}>
            
            <SearchInput />

            <MyUserContextProvider>
                <AccountButtons />
            </MyUserContextProvider>
            
        </div>
    );
    {
        /*
            - search
            - menu? ( settings, playlist, library, arrow_down )
            - account
        */
    }
};

export default PlaylistFooter;