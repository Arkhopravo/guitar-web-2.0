import React, { useState, useEffect, useRef }  from 'react'
import styled from 'styled-components'
import {color} from '../Tuner/constants/colors'
import Icon from '../Icon'

const Root = styled.div`
  overflow: hidden;
`

const Header = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 1.25rem 0;
  background: transparent;
  border: none;
  font-family: 'aktiv-grotesk', Helvetica, sans-serif;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  ${({ isOpen }) =>
    isOpen
      ? `
    border-bottom: none;
    font-size: 1.25rem;
  `
      : `border-bottom: 1px solid ${color.greysemidark};`}
  transition: font-size 0.1s ease;
  font-weight: 700;
`

const Content = styled.div`
  height: auto;
  transition: height 0.3s ease-in-out;
  font-weight: 500;
`

const Indicator = styled(Icon).attrs({
  name: 'chevron_right',
  size: 16,
})`
  transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : 0)});
`



const Accordion = ({label, children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.height = isOpen
      ? `${contentRef.current.scrollHeight}px`
      : '0px'
  }, [isOpen])

  const trackClick = (buttonId) => {
    window.ysAnalytics.trackClick({
      label: buttonId,
      name: buttonId,
      type: 'action',
      position: "tuning-accordion",
    })
  }

  const toggleActive = () => {
    if(!isOpen){
      trackClick(label)
    }
    setIsOpen(!isOpen)
  }

  return (
    <Root>
    <Header ref={headerRef} isOpen={isOpen} onClick={toggleActive}>
      {label}
      <Indicator isOpen={isOpen} />
    </Header>
    <Content ref={contentRef}>{children}</Content>
  </Root>
  )
}

export default Accordion