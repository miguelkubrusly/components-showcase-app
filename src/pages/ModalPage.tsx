import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {isOpen && <Modal />}
    </div>
  );
}

export default ModalPage;
