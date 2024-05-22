"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useAuthModal from "@/hooks/useAuthModal";

import Modal from './Modal';

const AuthModal = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();
  
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal 
      title="Bentornato!" 
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
                brand: 'red',
                brandAccent: 'darkred',
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