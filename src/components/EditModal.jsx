import './modal.css';

export const EditModal = ({ handleClose, show, children, title }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="button" onClick={handleClose}>
            {" "}
            close
          </button>
        </div>
      </div>
    </div>
  );
};