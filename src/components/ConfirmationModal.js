import React from 'react';
import Modal from 'react-modal';
import { ANIMATION_DIRECTION } from '../constants';
import { StepperContext } from '../contexts/stepperContext';
import { StyledButton, StyledP } from '../theme/globalStyle';
import 'animate.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(16, 6, 159, 0.9)',
  },
  content: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    inset: 'auto',
    padding: '0',
    margin: '0',
    border: 'none',
    borderRadius: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function ConfirmationModal({
  modalIsOpen,
  setIsOpen,
  setShareData,
  initState,
}) {
  const { dispatch } = React.useContext(StepperContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      appElement={document.getElementById('root' || undefined)}
    >
      <div style={{ textAlign: 'center' }}>
        <StyledP style={{ color: '#FFF' }}>
          You've successfully shared your IRP results.
        </StyledP>
        <StyledButton
          type="button"
          className="orange"
          style={{ display: 'inline-block', margin: '0 10px' }}
          onClick={() => {
            dispatch({
              type: 'setCurrentPage',
              currentPage: 4,
              animationDirection: ANIMATION_DIRECTION.BACKWARD,
            });
          }}
        >
          Back to my IRP
        </StyledButton>
        <StyledButton
          type="button"
          className="orange"
          style={{ display: 'inline-block', margin: '0 10px' }}
          onClick={() => {
            setShareData(initState);
            setIsOpen(false);
          }}
        >
          Share again
        </StyledButton>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;
