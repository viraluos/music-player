"use client";

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

import useAuthModal from "@/hooks/useAuthModal";

import { createClient } from '@/utils/supabase/client';

import Modal from './Modal';
import { redColorScheme } from '../Global';

const AuthModal = () => {
  const supabaseClient = createClient();

  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    console.log('supabaseClient', supabaseClient);
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose, supabaseClient]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal 
      title="Bentornato" 
      description="Logga nel tuo account." 
      isOpen={isOpen} 
      onChange={onChange} 
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={[]}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: `${redColorScheme}`,
                brandAccent: `dark${redColorScheme}`,
              },
            },
          },
        }}
        theme="dark"
      />
    </Modal>
  );
}

export default AuthModal;