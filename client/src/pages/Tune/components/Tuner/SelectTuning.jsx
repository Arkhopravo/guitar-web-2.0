import React,{useState} from 'react'
import styled from 'styled-components'
import {useDialog} from '../../hooks/useDialog'
import DownloadScreen from './DownloadScreen'
import {color } from './constants/colors'
import {media} from './constants/breakpoints'
// import tuningOptions from './constants/tuningOptions'
import tuningOptions from './constants/tuningOptions'
import TuningsModal from '../TuningsModel/index'

const SelectTuningButton = styled.div`
font-family: 'aktiv-grotesk', Helvetica, sans-serif;
padding: 0;
cursor: pointer;
background: transparent;
color: ${color.greylight};
border: none;
font-size: 1em;
text-align: left;
${media.desktop`
  text-align: right;
`}
`

const SelectTuningButtonContent = styled.div`
display: grid;
grid: 1fr / auto auto;
gap: 0.2em;

span {
  white-space: nowrap;
}

span:first-child {
  color: white;
}
span:last-child {
  font-size: 0.875em;
  color: ${color.greysemilight};
}
`

const Icon = styled.span`
margin-left: 1em;
grid-area: 1 / 2 / span 2;
align-self: center;
box-sizing: border-box;
position: relative;
display: block;
width: 1.375em;
height: 1.375em;
border: 2px solid transparent;
border-radius: 100px;

&::after {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  left: 4px;
  top: 2px;
}
`


const SelectTuning = () => {
  const [openTuningsModal, closeTuningsModal] = useDialog('tunings-modal', true)
  const [selectedTuning, setSelectedTuning] = useState(
    'Guitar 6-string: Standard',
  )
  const [openDownloadScreen, setOpenDownloadScreen] = useState(false)

  const trackClick = (buttonId) => {
    window.ysAnalytics.trackClick({
      label: buttonId,
      name: buttonId,
      type: 'action',
      position: "tuning-selection",
    })
  }

  const handleSelect = (option) => {
    trackClick(option.label)
    if (option.premium) {
      setOpenDownloadScreen(true)
      return
    }
    setSelectedTuning(option.label)
  }

  const guitarTunings = tuningOptions.find(
    (item) => item.instrument === 'Guitar',
  ).options
  const currentTuning = guitarTunings.find(
    (item) => item.label === 'Guitar 6-string: Standard',
  ).notes
  const currentNotes = currentTuning.map((item) => item.note).join(' ')

    const [open, setOpen] = useState(false)

  const AccordionOpen = () => {
      setOpen(!open)
     
  }
  const toggleModal = (isOpen) => {
    setOpen(isOpen);
  };


  return (
    <React.Fragment>
      <SelectTuningButton
      
      onClick={AccordionOpen} 
      >
        <SelectTuningButtonContent>
          <span>{selectedTuning.replace(/:.+$/, '').trim()}</span>
          <Icon alt="Chevron down"   />
          <span>
            {selectedTuning.replace(/^.+:/, '').trim()} ({currentNotes})
          </span>
        </SelectTuningButtonContent>
      </SelectTuningButton>
      {open &&
      <>
      <TuningsModal
      selectedTuning={selectedTuning}
      handleSelect={handleSelect}
      open={setOpen}
      toggleModal={toggleModal} 
      >
        
        
        {openDownloadScreen && <DownloadScreen open={setOpenDownloadScreen} />}
      </TuningsModal>
        </> 
    }
    </React.Fragment>
  )
}

export default SelectTuning