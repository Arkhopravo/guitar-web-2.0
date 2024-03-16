import React from 'react'
import styled from 'styled-components'
import { color } from '../Tuner/constants/colors'
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
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  width: 90vw;
  max-width: 600px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h2 {
    color: #000;
    margin: 0;
  }

  button {
    color: ${color.greymiddle};
    font-size: 1.5rem;
    background: transparent;
    border: 0;
    cursor: pointer;
    &::before {
      content: '\u2715';
    }
  }
`

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;

  img {
    width: 70%;
    max-width: 200px;
  }

  h2 {
    margin: 0;
    margin-bottom: 0.25em;
  }

  p {
    max-width: 500px;
    margin: 0;
    text-align: center;
  }
`

const Footer = styled.footer`
  margin: 1rem;
`

const Button = styled.button`
  height: 40px;
  padding: 0 2rem;
  font-size: 1rem;
  display: inline-grid;
  place-content: center;
  white-space: nowrap;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.1s ease-out;
  color: ${color.greydark};

  ${({ primary }) =>
    primary
      ? `
    background-color: ${color.greenAccent};
    border: 2px solid ${color.greenAccent};
    `
      : ''}

  ${({ secondary }) =>
    secondary
      ? `
      border: 2px solid ${color.greydark};
      background-color: transparent;
      margin-left: 1rem;
    `
      : ''}

  &:hover {
    background-color: ${color.greydark};
    border: 2px solid ${color.greydark};
    color: #fff;
    transform: scale(1.02);
  }
`


const Dialog = ({
  id = '',
  header: { title = '', showCloseButton = true } = {},
  actions,
  onClose = Function.prototype,
  children,
}) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Root
    className="micromodal-slide"
    id={id}
    aria-hidden="true"
    data-testid={id}
  >
    <Overlay
      className="micromodal__overlay"
      tabIndex="-1"
      data-micromodal-close
    >
      <Container
        className="micromodal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
      >
        <Header>
          {title ? <h2 id={`${id}-title`}>{title}</h2> : <span></span>}
          {showCloseButton && (
            <button
              aria-label="Close modal"
              data-micromodal-close
              onClick={handleClose}
            />
          )}
        </Header>
        <Content id={`${id}-content`}>{children}</Content>
        {actions && (
          <Footer>
            {actions.primary && (
              <Button primary onClick={actions.primary.onClick}>
                {actions.primary.label}
              </Button>
            )}
            {actions.secondary && (
              <Button
                secondary
                onClick={actions.secondary.onClick}
                data-micromodal-close
                aria-label="Close this dialog window"
              >
                {actions.secondary.label}
              </Button>
            )}
          </Footer>
        )}
      </Container>
    </Overlay>
  </Root>
  )
}

export default Dialog