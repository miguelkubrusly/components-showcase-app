import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ children, onClose, actionBar }: ModalProp) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white border-2 border-solid border-gray-400 min-w-[300px] min-h-[200px] max-w-[400px] max-h-[350px] p-8 rounded shadow-lg">
          <div className="flex flex-col justify-between h-full">
            {children}
            <div className="flex justify-end mt-6 p-2">{actionBar}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")!
  );
}

export default Modal;
