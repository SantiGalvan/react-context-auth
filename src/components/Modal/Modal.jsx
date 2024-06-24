import { FaTimes, FaTrashAlt } from "react-icons/fa";

const Modal = ({ isShow, closeModal, title, user, clickDelete }) => {
    return (
        <div className="modal" style={isShow ? { display: 'flex' } : ''} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">{title}</h2>
                        <button onClick={closeModal} type="button" className="btn-close"></button>
                    </div>
                    <div className="modal-body text-center">
                        {user ?
                            <p>Sicuro di voler eliminare <strong>{title}</strong> di <strong>{user}</strong>?</p> :
                            <p>Sicuro di voler eliminare <strong>{title}</strong>?</p>
                        }
                    </div>
                    <div className="modal-footer d-flex align-items-center justify-content-between">
                        <button
                            onClick={closeModal}
                            type="button"
                            className='btn btn-secondary d-flex align-items-center gap-1'>
                            <FaTimes />Chiudi
                        </button>
                        <button
                            onClick={clickDelete}
                            type="button"
                            className='btn btn-danger d-flex align-items-center gap-1'
                        >
                            <FaTrashAlt />Elimina
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;