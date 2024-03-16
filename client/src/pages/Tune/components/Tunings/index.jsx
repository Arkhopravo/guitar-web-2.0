import React from 'react'
import tuningOptions from '../Tuner/constants/tuningOptions'
import Accordion from './Accordion'
import styled from 'styled-components'
import {color} from '../Tuner/constants/colors'
import Icon from '../Icon'

const Root = styled.div`
  padding: 0 1rem;
`

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: ${({ isSelected }) =>
    isSelected
      ? `2px solid ${color.greenAccent}`
      : `1px solid ${color.greymiddle}`};
  cursor: pointer;
`

const Label = styled.div`
  display: flex;
  flex-direction: column;

  span {
    text-align: left;
  }

  span:last-of-type {
    font-size: 0.875em;
    color: ${color.greysemilight};
  }
`

const Notes = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const Note = styled.div`
  font-size: 0.875em;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.greysemidark};
  color: #fff;
  border-radius: 4px;
  margin: 0.125rem;
`

const CheckMark = styled(Icon).attrs({
  name: 'checkmark',
  size: 16,
  color: color.greenAccent,
})``




const Tunings = ({ selectedTuning, handleSelect, className }) => {

  return (
    <Root className={className}>
      {tuningOptions.map(({ instrument, options }) => (
        <Accordion key={instrument} label={instrument}>
          {options.map((option) => (
            <Option
              key={option.label}
              isSelected={option.label === selectedTuning}
              onClick={() => handleSelect(option)}
            >
              <Label>
                <span>{option.label.split(':')[0]}</span>
                <span>{option.label.split(': ').pop()}</span>
              </Label>
              <Notes>
                {option.notes &&
                  option.notes.map(({ note, octave }, index) => (
                    <Note
                      key={note + octave + index}
                      isSelected={option.label === selectedTuning}
                    >
                      {note} <sub>{octave}</sub>
                    </Note>
                  ))}
              </Notes>
              {option.label === selectedTuning && <CheckMark />}
            </Option>
          ))}
        </Accordion>
      ))}
    </Root>
  )
}

export default Tunings