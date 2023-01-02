import { useState } from "react";

export const useCommonModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, handleModalOpen, handleModalClose };
};
