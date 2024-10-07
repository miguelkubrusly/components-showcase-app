import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Do you wish to proceed with the nothingness?
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {isOpen && modal}
    </div>
  );
}

export default ModalPage;
