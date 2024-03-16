import React,{useState, useEffect, useMemo} from 'react'
import styled, { css } from 'styled-components'
import {color} from './constants/colors'
import Markar from '../Markar/Markar'
import guitar6Strings  from './constants/guitar6Strings'


const Root = styled.div`
  display: grid;
  grid-template-rows: 3.2em 3.2em 3.2em min-content;
  grid-template-columns: 3.2em 18em 3.2em;
  justify-content: center;
  width: 100%;
  gap: 2.1em 2em;
  box-sizing: border-box;
  margin-bottom: -3.5em;
  pointer-events: all;
`

const Head = styled.div`
  display: block;
  position: relative;
  grid-row: 1 / span 4;
`

const GuitarImage = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin-top: -3.5em;
`

const StringButton = styled.button`
  font-family: 'aktiv-grotesk', Helvetica, sans-serif;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid transparent;

  ${({ tuned, tuning }) =>
    tuned && tuning
      ? css`
          color: ${color.white};
          background: ${color.greenAccent};
          border-color: ${color.greenAccent};
        `
      : tuned
      ? css`
          color: ${color.white};
          background: ${color.greysemidark};
          border-color: ${color.greenAccent};
        `
      : tuning
      ? css`
          color: ${color.greysemidark};
          background: ${color.white};
        `
      : css`
          color: ${color.white};
          background: ${color.greysemidark};
        `}
  font-size: 1.3em;
  font-weight: 500;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: center;
  grid-row: ${({ row = 1 }) => row};
  grid-column: ${({ column = 1 }) => column};
  margin: ${({ margin: { top } = {} }) => `${top}`} 0 0 0;
  &:focus {
    outline: none;
  }
  transition: all 0.11s ease-out;
  padding: 0;
`

const InstrumentHead = ({
  target = -1,
  setTarget,
  auto,
  setAuto,
  setShowInstruction,
  inTune,
}) => {
  const [strings, setStrings] = useState(guitar6Strings)

  const stringAudio = useMemo(() => {
    return new Audio()
  }, [])

  const handleStringClick = (number, audio, note, octave) => () => {
    stringAudio.src = audio
    stringAudio.play().catch((error) => console.error(error.message))
    setAuto(false)
    setTarget(number)
    setShowInstruction(false)
    const stringId = `${note}_nr-${number}_oct-${octave}`
    window.ysAnalytics.trackClick({
      label: `string_${stringId}`,
      name: `string_button_${stringId}`,
      type: 'action',
      position: "tuner-section",
    })
  }

  useEffect(() => {
    setStrings(
      strings.map((string) => ({
        ...string,
        tuned: !!string.tuned || (string.number === target && inTune),
      })),
    )
  }, [inTune])

  useEffect(() => {
    if (auto) setTarget(-1)
  }, [auto])

  const targetString = useMemo(() => {
    return strings.find(({ number }) => number === target)
  }, [target])

  return (
    <Root>
 {strings.map(
        ({
          note,
          tuned,
          number,
          octave,
          audio,
          style: { row, column, margin } = {},
        }) => (
          <StringButton
            key={number}
            row={row}
            column={column}
            margin={margin}
            tuned={tuned}
            tuning={number === target}
            onClick={handleStringClick(number, audio, note, octave)}
          >
            {note}
          </StringButton>
        ),
      )}
      <Head>
        {targetString && (
          <Markar
            size={2.8125}
            top="68%"
            left={`${32.5 + 7 * target}%`}
            borderColor={color.white}
            borderWidth={0}
            background={color.white}
            color={color.greysemidark}
            fontSize={'1.3em'}
          >
            {targetString.note}
          </Markar>
        )}

      
      <GuitarImage
          src="https://yousician.com/guitartuna/static/media/guitar@1x.711ab13b.png"
          alt="An acoustic guitar head with tuning pegs"
        />
      </Head>
      
    </Root>
  )
}

export default InstrumentHead