import React, { ReactNode, useState } from 'react';

interface ModalState {
  status: boolean;
  content: ReactNode; // Adjust the type here
}

function useMain() {
  const [drop, setDrop] = useState({
    status: false,
    name: ''
  });

  const [modal, setModal] = useState<ModalState>({ // Specify the type here
    status: false,
    content: <></>
  });

  return {
    dropStatus: drop.status,
    dropName: drop.name,
    offDrop: () => setDrop({ name: '', status: false }),
    onDrop: (name: string) => setDrop({ status: true, name }),

    modalStatus: modal.status,
    modalContent: modal.content,
    offModal: () => setModal({ status: false, content: <></> }),
    onModal: (content?: ReactNode) => setModal({ status: true, content: content })
  };
}

export default useMain;
