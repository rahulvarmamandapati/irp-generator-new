import React from 'react';
import Modal from 'react-modal';
import { ANIMATION_DIRECTION } from '../constants';
import { StepperContext } from '../contexts/stepperContext';
import { LinkButton, StyledButton, StyledP } from '../theme/globalStyle';
import { removeProfile } from '../services/hooks/write';
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

const DeleteModalWrapper = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {
    state: { profile, persona },
    dispatch,
  } = React.useContext(StepperContext);

  const updateRemoved = async () => {
    const updated = await removeProfile(profile, persona);
    dispatch({ type: 'LOAD_PERSONA', savedPersona: updated });
    dispatch({
      type: 'setCurrentPage',
      currentPage: 0,
      animationDirection: ANIMATION_DIRECTION.BACKWARD,
    });
  };

  return (
    <div>
      {!modalIsOpen && (
        <LinkButton
          type="button"
          style={{ display: 'block', textTransform: 'uppercase' }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div className="icon-remove">Delete</div>
          {' '}
          Delete this profile
        </LinkButton>
      )}
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        appElement={document.getElementById('root' || undefined)}
      >
        <div style={{ textAlign: 'center' }}>
          <StyledP style={{ color: '#FFF' }}>
            Are you sure you want to delete this profile?
          </StyledP>
          <StyledButton
            type="button"
            className="orange"
            style={{ display: 'inline-block', margin: '0 10px' }}
            onClick={() => {
              updateRemoved();
            }}
          >
            Yes
          </StyledButton>
          <StyledButton
            type="button"
            className="orange"
            style={{ display: 'inline-block', margin: '0 10px' }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            No
          </StyledButton>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModalWrapper;
