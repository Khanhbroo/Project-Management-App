import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = ({ ref, children, buttonCaption }) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
