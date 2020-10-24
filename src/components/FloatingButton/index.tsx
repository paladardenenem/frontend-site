import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { Action, Fab } from 'react-tiny-fab';

// import { Container } from './styles';

const FloatingButton: React.FC = () => {
  return (
    <Fab
      icon={<GiShoppingCart size={34} />}
      event="click"
      mainButtonStyles={{ backgroundColor: '#d62828' }}
      alwaysShowTitle
    >
      <Action style={{ backgroundColor: '#128c7e' }} text="Whatsapp">
        <FaWhatsapp size={34} />
      </Action>
    </Fab>
  );
};

export default FloatingButton;
