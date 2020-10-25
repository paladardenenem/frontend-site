import React from 'react';
import ReactModal from 'react-modal';
import { Container } from './styles';
import { RiCloseFill } from 'react-icons/ri';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #fff775',
    borderRadius: '5%'
  }
};

interface ModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product?: MenuProps;
}
interface MenuProps {
  name: string;
  image: string;
  category: string;
  description: string;
}

function Modal({ modalIsOpen, setModalIsOpen, product }: ModalProps): any {
  function closeModal() {
    setModalIsOpen(false);
  }
  function handleClick() {
    window.location.href =
      'https://api.whatsapp.com/send?l=pt-BR&phone=5532988102965';
  }
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container>
          <button onClick={() => closeModal()}>
            <RiCloseFill />
          </button>
          <aside>
            <img src={product.image} alt={product.name} />
          </aside>
          <section>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={() => handleClick()}>Comprar</button>
          </section>
        </Container>
      </ReactModal>
    </div>
  );
}

export default Modal;
