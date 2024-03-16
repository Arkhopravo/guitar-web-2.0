import React from 'react'
import {color} from './constants/colors'
import Markar from '../Markar/Markar'
import guitar6Strings from './constants/guitar6Strings'
import clamp from '../../helpers/clamp'
import styled from 'styled-components'


const Root = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 18em;
  width: 100%;
  isolation: isolate;
`

const TuningLine = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 1px);
  width: 2px;
  bottom: 0;
  background-color: ${({ lineColor = color.greymediumdark }) => lineColor};
  transition: background-color 0.04s ease-out;
`

const TuningFeedback = styled.p`
  top: calc(16%);
  color: ${color.greylight};
  font-size: 0.9375em;
  line-height: 1.2;
  background: ${color.greysemidark};
  padding: 0.5em 1em;
  position: absolute;
  left: 50%;
  border-radius: 50px;
  transform-origin: center center;
  transform: ${({ isHigh }) =>
    isHigh ? 'translate(-8.5em)' : 'translate(1.5em)'};
`

const TuningNote = styled.h1`
  box-sizing: border-box;
  color: #fff;
  position: absolute;
  top: 5.5em;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8em;
  transition: border background 0.04s ease-in-out;

  background-color: ${color.greysemidark};
  border-radius: 100px;
  width: 2em;
  height: 2em;
  line-height: 1.7;
  border: 2px solid ${({ lineColor = color.greymediumdark }) => lineColor};

  sub {
    font-weight: 600;
  }
`

const Animation = styled.span`
  display: block;
  ${({ pop }) => pop && `animation: pop 0.22s ease-out 1`};
  @keyframes pop {
    30% {
      transform: scale(1.4);
    }
  }
`

const Checkmark = styled.span`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border: .125em solid transparent;
  border-radius: 100px;
  transform: scale(2);
  transform-origin: left top;
  transition: all 0.11s ease-out;
}
&:after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: -0.4em;
    top: -0.75em;
    width: 0.375em;
    height: .6875em;
    border-color: ${color.greenAccent}
    border-width: 0 .0625em .0625em 0;
    border-style: solid;
    transform-origin: bottom left;
    transform: rotate(45deg);
}
`

const TuningSurface = ({
  audioProcess: { percentFromNote, noteOn, inTuneRatio } = {},
  target,
  inTune,
}) => {
  const isCorrect = noteOn && inTuneRatio
  const isTooHigh = !isCorrect && percentFromNote >= 0
  const string = guitar6Strings.find(({ number }) => number === target) || {}

  return (
    <React.Fragment>
    <Root>
      <TuningLine
        lineColor={
          isCorrect && string.note ? color.greenAccent : color.greymiddledark
        }
      />
      {noteOn && !isCorrect && (
        <TuningFeedback isHigh={isTooHigh}>
          {isTooHigh ? 'Tune down' : 'Tune up'}!
        </TuningFeedback>
      )}
      {string.note && (
        <TuningNote
          lineColor={
            isCorrect && string.note ? color.greysemidark : 'transparent'
          }
        >
          <Animation pop={inTune}>
            {string.note}
            <sub>{string.octave}</sub>
          </Animation>
        </TuningNote>
      )}
      <Markar
        size={3.125}
        top="calc(40% - .9375em)"
        left="50%"
        translate={clamp(percentFromNote / 16, -12.5, 12.5)}
        borderColor={
          isCorrect && string.note
            ? color.greenAccent
            : noteOn && !isCorrect
            ? color.yellow
            : color.greylight
        }
        borderWidth={3}
        background={color.greydark}
        color="#FFF"
        fontSize={'1em'}
      >
        {isCorrect ? <Checkmark /> : noteOn ? percentFromNote : ''}
      </Markar>
    </Root>
  </React.Fragment>
  )
}

export default TuningSurface