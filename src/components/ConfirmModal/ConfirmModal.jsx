
import './ConfirmModal.css'

const ConfirmModal = ({isOpen, onConfirm,onCancel,user }) => {
    if (!isOpen) return null
  return (
    <div className="modal-overlay">
    <div className="modal">
      <h2>Confirmar eliminación</h2>
      <p>
        ¿Seguro que deseas eliminar a{' '}
        <strong>
          {user?.name.first}{' '}
          {user?.name.last}
        </strong>
        ?
      </p>

      <div className="modal-actions">

        <button
          className="btn-danger"
          onClick={onConfirm}
        >
          Sí, eliminar
        </button>

        <button
          className="btn-secondary"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
  )
}

export default ConfirmModal