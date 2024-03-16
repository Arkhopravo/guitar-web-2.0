import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {color} from '../Tuner/constants/colors'

const Root = styled.div``

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0, 0, 0, 0.7);
z-index: 10000;

@media (max-width: 864px) {
  align-items: flex-end;
}
`

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
background-color: ${color.greydark};
color: #fff;
overflow-y: auto;

@media (max-width: 864px) {
  border-radius: 0;
  width: 100vw;
  height: 100%;
  bottom: 0;
  padding-bottom: 2rem;
}

border-radius: 8px;
width: 800px;
height: 70vh;

@media (min-width: 864px) {
  height: auto;
  max-height: 70vh;
}
`

const Header = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
max-width: 100vw;
position: sticky;
top: 0;
background-color: ${color.greydark};
padding: 1rem;
z-index: 666;

button {
  color: ${color.greymiddle};
  font-size: 1.5rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  &::before {
    content: '\u2715';
  }
}
`

const Content = styled.div``

const Modal = ({id='', children, open}) => {
  
  const handleClose = () => {
    console.log("Close button clicked"); 
    if (open) {
      open(false); // Call the open function to close the modal
    }
    
  }
  
  return (
    <Root
    className="micromodal-slide"
    id={id}
    aria-hidden="true"
    data-testid={id}
  >
    <Overlay className="micromodal__overlay" tabIndex="-1">
      <Container
        className="micromodal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
      >
        <Header className="modal__header">
          <button
            className="modal__close"
            id="modal__close"
            aria-label="Close modal"
            onClick={handleClose}
          />
        </Header>
        <Content id={`${id}-content`}>{children}</Content>
      </Container>
    </Overlay>
  </Root>
  )
}

export default Modal