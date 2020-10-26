import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { Action, Fab } from 'react-tiny-fab';

// import { Container } from './styles';

const FloatingButton: React.FC = () => {
  function handleClick() {
    window.location.href =
      'https://api.whatsapp.com/send?l=pt-BR&phone=5532988102965';
  }
  return (
    <Fab
      icon={<GiShoppingCart size={34} />}
      event="click"
      mainButtonStyles={{
        backgroundColor: '#d62828',
        position: 'absolute',
        bottom: -30,
        right: -20
      }}
      alwaysShowTitle
    >
      <Action
        style={{
          backgroundColor: '#128c7e',
          position: 'absolute',
          bottom: 15,
          right: -20
        }}
        onClick={() => handleClick()}
        text="Whatsapp"
      >
        <FaWhatsapp size={34} />
      </Action>
    </Fab>
  );
};

export default FloatingButton;
