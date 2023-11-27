import './Modal.scss';

export   const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal__display-block" : "modal__display-none";
  return (
    <div className={showHideClassName}>
         
      <section className="modal-main">
      <button className="modal-main__btn" type="button" onClick={handleClose}>
          X
        </button>
        {children}
      
      </section>
    </div>
  );
};