import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import useAuthModal from "@/hooks/useAuthModal";
import usePlayer from "@/hooks/usePlayer";
import { useUser } from "@/hooks/useUser";

import Button from '@/components/Button';

const AccountButtons = () => {
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
      <div>
        
        {  user ? (
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
                    > Log in
                    </Button>
                 </>
        ) }
      </div>
    );
};

export default AccountButtons;