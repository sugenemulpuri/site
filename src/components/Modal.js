import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;
    //if modal is not open, exit the function

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    //setting the escape key to close the modal if open

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);
  //adding event listener to listen for the click to either open the modal or close it.

  if (!isOpen) return null;

  //if the modal is not open do not do anything

  return ReactDOM.createPortal(
    <div className="BackDrop" onClick={onClose}>
      <div className="Content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );

  //createPortal is used to create a new access point on the DOM that overlays the entire page, with Backdrop being the overlay around the modal. stopPropogation is used to isolate clicking on the event to the content, so that the function of clicking the content does not go up to the parent backdrop.
}
