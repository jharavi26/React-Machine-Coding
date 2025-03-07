import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const modalRef = useRef(null);

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  
  const closeDialog = () => {
    if (modalRef.current ) {
      modalRef.current.classList.add("hide");
      modalRef.current.addEventListener("animationend", handleAnimationEnd, {
        once: true,
      });
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Backspace") {
        closeDialog();
      }
    };

    document.addEventListener("keyup", handleKey);

    return () => {
      document.removeEventListener("keyup", handleKey);
    };
  }, [closeDialog]);

  const handleAnimationEnd = () => {
    handleClose();
  };

  return (
    <div className="wrapper">
      <button className="show-modal" onClick={handleClick}>
        Show Modal
      </button>
      {showDialog && (
        <div className="container">
          <div className="modal" ref={modalRef}>
            <p>
              This is Modal Text. The entity inside the element represents the
              multiplication symbol, commonly used as a close button in UI
              design.
            </p>
            <button className="close-btn" onClick={closeDialog}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
