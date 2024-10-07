import Modal from "../components/Modal";
import Button from "../components/Button";
import { RefObject, useEffect, useRef, useState } from "react";

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const modalEl: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closingHandler = (event: Event) => {
      if (!modalEl.current) {
        return;
      }
      if (!modalEl.current.contains(event.target as Node | null)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", closingHandler);
    } else {
      return () => {
        document.removeEventListener("click", closingHandler);
      };
    }

    return () => {
      document.removeEventListener("click", closingHandler);
    };
  }, [isOpen]);

  const handleOpen = () => {
    console.log("clicked");
    console.log(isOpen);
    setIsOpen(true);
  };

  return (
    <div>
      <Button primary onClick={handleOpen}>
        Open Modal
      </Button>
      {isOpen && (
        <div ref={modalEl}>
          <Modal />
        </div>
      )}
    </div>
  );
}

export default ModalPage;
