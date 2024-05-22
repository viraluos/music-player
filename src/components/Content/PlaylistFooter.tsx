"use client";

import { twMerge } from "tailwind-merge";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import Button from "../Button";
import SearchInput from "../SearchInput";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";

interface FooterProps {
    children?: React.ReactNode;
    className?: string;
}

const PlaylistFooter: React.FC<FooterProps> = ({
    children,
    className
}) => {
    const authModal = useAuthModal();
    const player = usePlayer();
    const router = useRouter();

    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        player.reset();
        router.refresh();

        if(error)
            toast.error(error.message);
        else
            toast.success("Sei uscito");
    }
    
    return (
        <div className={twMerge( `w-full p-4 bg-gradient-to-t flex justify-between`, className )}>
            
            <SearchInput />

            {user ? (
                <>
                    <Button 
                        onClick={handleLogout}
                        className="w-fit"
                    > Logout
                    </Button>
                    <Button 
                        onClick={() => router.push('/account')}
                        className="w-fit"
                    > Account
                    </Button>
                </>
            ) : (
                <>
                    <Button 
                        onClick={authModal.onOpen} 
                        className="w-fit"
                    > Log in
                    </Button>
                </>
            )}
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