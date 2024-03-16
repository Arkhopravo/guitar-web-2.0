import React from 'react'
import Modal from './Modal'
import TuningOptions from '../Tunings'

const TuningsModal = ({selectedTuning, handleSelect, open, toggleModal, children}) => {
  const handleClose = () => {
    console.log("Close button clicked");
    toggleModal(false); // Call toggleModal to close the modal
  };
  
  return (
    <Modal id="tunings-modal" open={open}>
      <TuningOptions
        selectedTuning={selectedTuning}
        handleSelect={handleSelect}
        className={children ? 'invisible' : 'visible'}
      />
      {children}
    </Modal>
  )
}

export default TuningsModal