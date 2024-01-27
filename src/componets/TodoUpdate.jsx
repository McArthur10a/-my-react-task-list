import { useState, useRef } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from '../Hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateName, updateDescription, updateDate, onInputChange } = useForm({
    updateName: todo.name,
    updateDescription: todo.description,
    updateDate: todo.date,
  });

  const [showModal, setShowModal] = useState(false);
  const focusInputRef = useRef();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const name = updateName;
    const description = updateDescription;
    const date = updateDate;

    handleUpdateTodo(id, name, description, date);

    focusInputRef.current.focus();
    handleCloseModal();
  };

  return (
    <>
      <form onSubmit={onSubmitUpdate}>
	  <input
          type='text'
          className={`input-update ${
            todo.done ? 'text-decoration-dashed' : ''
          }`}
          name='updateDescription'
          value={updateDescription}
          onChange={onInputChange}
          placeholder='Descripción de la Tarea'
          readOnly={false}
        />
        <input
          type='text'
          className={`input-update ${
            todo.done ? 'text-decoration-dashed' : ''
          }`}
          name='updateName'
          value={updateName}
          onChange={onInputChange}
          placeholder='Descipcion de la tarea'
          readOnly={false}
        />
        
        <input
          type='date'
          className={`input-update ${
            todo.done ? 'text-decoration-dashed' : ''
          }`}
          name='updateDate'
          value={updateDate}
          onChange={onInputChange}
          placeholder='Fecha de la Tarea'
          readOnly={false}
        />

        <button className='btn-edit' type='button' onClick={handleOpenModal}>
          <FaEdit />
        </button>
      </form>

      {/* Modal para mostrar detalles de la tarea */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Nombre:</strong> {updateName}</p>
          <p><strong>Descripción:</strong> {updateDescription}</p>
          <p><strong>Fecha:</strong> {updateDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={onSubmitUpdate}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
