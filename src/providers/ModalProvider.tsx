"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/Modal/AuthModal";
import UploadModal from "@/components/Modal/UploadModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <AuthModal />
      <UploadModal />
    </div>
  );
}

export default ModalProvider;