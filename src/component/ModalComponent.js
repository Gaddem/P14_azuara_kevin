import React from "react";
import PropTypes from "prop-types";

const ModalComponent = ({ isOpen, onClose, style, children }) => {
  const overlayStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    ...style.overlay,
  };

  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,

    ...style.modal,
  };
  const inModalFlexStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={modalStyle}>
        <div style={inModalFlexStyle}>
          {children}
          <button style={{ alignSelf: "center", margin: 10 }} onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  style: PropTypes.shape({
    overlay: PropTypes.object,
    modal: PropTypes.object,
  }),
  children: PropTypes.node,
};

export default ModalComponent;
