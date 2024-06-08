// useModal.ts
import { useEffect, useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
   

    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    

    return {
        isOpen,
        openModal,
        closeModal,
    };
};

export default useModal;