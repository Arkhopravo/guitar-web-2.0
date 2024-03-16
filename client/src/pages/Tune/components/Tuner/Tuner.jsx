import React, { useState, useEffect }  from 'react'
import AutoSwitch from './AutoSwitch'
import SelectTuning from './SelectTuning'
import {color} from './constants/colors'
import * as Sentry from '@sentry/browser'
import styled, { keyframes } from 'styled-components'
import {media} from './constants/breakpoints'
import InstrumentHead from './InstrumentHead'
import TuningSurface from './TuningSurface'
import AppInfo from './AppInfo'
import InTuneSoundFile from '../../assets/music/D.mp3'
import { useDialog } from '../../hooks/useDialog'
import { useObservable, pluckFirst } from 'observable-hooks'
import noSleep from '../../hooks/useNoSleep'
import useVisibilityChangeEffect from '../../hooks/useVisibilityChangeEffect'
import get from 'lodash/get';
import { fromEvent, combineLatest, EMPTY, of } from 'rxjs'

import {
  map,
  tap,
  filter,
  distinctUntilChanged,
  switchMap,
  catchError,
} from 'rxjs/operators'

import PermissionDialog from '../Dialog/PermissionDialog'
import ErrorDialog from '../Dialog/ErrorDialog'
import DebugDialog from '../Dialog/DebugDialog'
import useNoSleep from '../../hooks/useNoSleep'

const inTuneSound = new Audio(InTuneSoundFile)

const backgroundFlow = keyframes`
  0% { background-position: 0 0, 0 0, -1px -21px, -1px -21px; }
  100% { background-position: 0 0, 0 0, -1px -1px, -1px -1px; }
`

const Root = styled.section`
  font-size: 3.1vw;
  ${media.tunerCutoff`
    font-size: 16px;
  `}  
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 18%,
      ${color.greydark} 70%
    ),
    linear-gradient(to bottom, ${color.greydark} 5%, rgba(0, 0, 0, 0) 20%),
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-position: 0 0, 0 0, -1px -1px, -1px -1px;
  background-size: 100% 100%, 100% 100%, 20px 20px, 20px 20px;
  animation-name: ${backgroundFlow};
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  overflow: hidden;
`

const AppContainer = styled.div`
  max-width: calc(1440px + 6rem);
  position: relative;
  width: 100%;
  display: grid;
  ${media.desktop`
    display: inherit;
  `}
`

const PanelLeft = styled.div`
  max-width: 20vw;
  position: absolute;
  left: 3rem;
  top: 6em;
  color: ${color.white};
  text-align: left;
  z-index: 1;
  display: grid;
  gap: 2rem;
`

const PanelRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1.5rem;
  ${media.desktop`
    max-width: 20vw;
    position: absolute;
    display: grid;
    grid: 1fr / 1fr;
    margin: 0;
    gap: 2rem;
    justify-items: flex-end;
  `}
  right: 3rem;
  top: 6em;
  color: ${color.white};
  text-align: center;

  .micromodal-slide {
    order: 3;
  }
`

const Header = styled.h1`
  margin-left: 1.5rem;
  ${media.desktop`
    position: absolute;
    top: 1em;
    left: 3rem;
    margin-left: 0;
  `}
  width: 100%;
  color: ${color.white};
  text-transform: none;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  font-size: 1.5em;
`

const TunerContainer = styled.div`
  order: 2;
  ${media.desktop`
    order: 1;
  `}
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  pointer-events: none;
`

const Bubble = styled.div`
  font-size: 0.875em;
  ${media.tunerCutoff`
    font-size: 14px;
  `}
  background: ${color.greysemidark};
  border-radius: 200px;
  color: ${color.white};
  position: absolute;
  line-height: 1.2;
  top: 11em;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5em 1.2em;
  max-width: 12em;
  transition: all 0.11s ease-out;
`

const DebugButton = styled.button`
  display: none;
  position: absolute;
  padding: 8px;
  right: 0;
  bottom: 0;
`


let mic, script, noteInTuneSub, audioContext, stream


const Tuner = () => {
  const [error, setError] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [permissionRequested, setPermissionRequested] = useState(true)

  const [auto, setAuto] = useState(true)
  const [target, setTarget] = useState(-1)
  useEffect(() => {
    if (auto) setTarget(-1)
  }, [auto])
 
 
  const [showInstruction, setShowInstruction] = useState(true)
  const [audioProcess, setAudioProcess] = useState({ percentFromNote: 0 })
  const [inTune, setInTune] = useState(false)

  const auto$ = useObservable(pluckFirst, [auto])
  const target$ = useObservable(pluckFirst, [target])

  const [debug, setDebug] = useState({})


  const setupActiveTuner = (stream) => {
    audioContext =
      audioContext || new (window.AudioContext || window.AudioContext)()

    setDebug({
      'sample rate': audioContext.sampleRate,
      'audio track': stream.getAudioTracks()[0].label,
    })
    script = audioContext.createScriptProcessor(window.ARRAY_SIZE, 1, 1)
    const audio$ = fromEvent(script, 'audioprocess').pipe(
      filter((event) => event !== null),
      map((event) => event.inputBuffer.getChannelData(0)),
    )
    const handleAutoTarget = ([result, auto]) => {
      if (auto) setTarget(result.CurrentString)
    }

    const hideInstruction = () => {
      if (showInstruction) setShowInstruction(false)
    }
    const handleNoteOff = ([result]) => {
      if (result.CurrentString === -1) {
        setAudioProcess({
          percentFromNote: 0,
          inTuneRatio: 0,
          noteOn: false,
        })
      }
    }

    const handleNoteOn = ([result]) => {
      setAudioProcess({
        percentFromNote: Math.round(result.TuningErrorCents),
        inTuneRatio: result.InTuneRatio,
        noteOn: true,
      })
    }

    const analyseSound = (audioContext) => ([input, auto, target]) => {
      const selectedTarget = auto ? -1 : target

      if (!get(window, 'WebTuna.data')) {
        setError(true)
        setErrorMessage(
          "Looks like your browser doesn't support our interactive tuner, please try another browser or download our app.",
        )
        Sentry.captureException('Unsupported browser')
      }

      const { data, dataHeap, analyseBuffer } = window.WebTuna
      data.set(input)

      dataHeap.set(new Uint8Array(data.buffer))
      return [
        JSON.parse(
          analyseBuffer(
            dataHeap.byteOffset,
            data.length,
            selectedTarget,
            audioContext.sampleRate,
          ),
        ),
        auto,
      ]
    }

    const noteInTune$ = combineLatest(audio$, auto$, target$).pipe(
      map(analyseSound(audioContext)),
      catchError((error) => {
        Sentry.captureException(error)
        throw new Error(
          'We’re having a hard time detecting the note you played',
        )
      }),
      tap(handleAutoTarget),
      tap(handleNoteOff),
      filter(([result]) => result.CurrentString > -1),
      tap(hideInstruction),
      tap(handleNoteOn),
      map(([result]) => result.InTuneRatio > 0.9),
      distinctUntilChanged(),
      switchMap((isCorrect) => {
        if (!isCorrect) {
          setInTune(false)
          return EMPTY
        }
        return of(true)
      }),
    )
    const handleInTune = () => {
      setInTune(true)
      inTuneSound.play().catch((error) => console.error(error.message))
      return true
    }
    noteInTuneSub = noteInTune$.subscribe(handleInTune, (error) => {
      setError(true)
      setErrorMessage(error.message)
    })
    // Create sources - Media stream
    mic = audioContext.createMediaStreamSource(stream)
    // Connect input node to effect node
    mic.connect(script)
    // Connect effect node to destination
    script.connect(audioContext.destination)
  }

   const noSleep = useNoSleep()

   const startMicrophone = async () => {
    try {
      return await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch (error) {
      let errorMsg = ''
      if (!get(navigator, 'mediaDevices.getUserMedia')) {
        errorMsg =
          'Looks like your browser doesnot support microphone, please try another browser or download our app.'
      } else {
        errorMsg =
          'GuitarTuna needs permission to use your computer’s microphone. Please check browser site settings.'
      }
      setError(true)
      setErrorMessage(errorMsg)
      throw new Error('Permission denied')
    }
  }

  const initActiveTuner = async () => {
    setPermissionRequested(true)
    try {
      stream = await startMicrophone()
      setupActiveTuner(stream)
      get(noSleep, 'enable') && noSleep.enable()
    } catch (error) {
      if (error.message === 'Permission denied') return
      Sentry.captureException(error)
    }
  }
  const silentlyCheckPermission = async () => {
    try {
      const { state } = await navigator.permissions.query({
        name: 'microphone',
      })
      if (state === 'prompt') {
        throw new Error('Permission has not been requested')
      }
    } catch (error) {
      Sentry.captureMessage('Permission error', error)
      setPermissionRequested(false)
      return
    }
    initActiveTuner()
  }

  const closeActiveTuner = () => {
    if (!stream) {
      return
    }
    Array.prototype.forEach.call(stream.getAudioTracks(), (track) => {
      track.stop()
    })
    get(stream, 'stop') && stream.stop()
    stream = null

    get(mic, 'disconnect') && mic.disconnect(script)
    get(script, 'disconnect') && script.disconnect(audioContext.destination)
    get(noteInTuneSub, 'unsubscribe') && noteInTuneSub.unsubscribe()
  }
  useVisibilityChangeEffect(
    (isVisible) => {
      if (isVisible && !get(stream, 'active')) {
        if (permissionRequested) {
          initActiveTuner()
        } else {
          silentlyCheckPermission()
        }
        get(noSleep, 'enable') && noSleep.enable()
      }
      if (!isVisible && get(stream, 'active')) {
        closeActiveTuner()
        get(noSleep, 'disable') && noSleep.disable()
      }
    },
    [permissionRequested],
  )
  useEffect(() => {
    silentlyCheckPermission()
    return closeActiveTuner
  }, [])




  useEffect(() => {
    if (!permissionRequested) {
      
    }
  }, [permissionRequested])

  

  const [visible, setVisible] = useState(true);

  // Function to hide the dialog after a delay
  const hideDialog = () => {
    setVisible(false);
  };

  useEffect(() => {
    // Set a timeout to hide the dialog after 5 seconds
    const timeoutId = setTimeout(hideDialog, 4000);

    // Clear the timeout if the component unmounts or if 'visible' changes before the timeout
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <Root>
    <AppContainer>
      <Header>Online guitar tuner</Header>
      <PanelLeft>
        <AppInfo/>
      </PanelLeft>
        <TunerContainer>
          <TuningSurface
          audioProcess={audioProcess}
          target={target}
          inTune={inTune}
          />
          <InstrumentHead
          target={target}
          setTarget={setTarget}
          auto={auto}
          setAuto={setAuto}
          setShowInstruction={setShowInstruction}
          inTune={inTune}
          
          />
           {showInstruction && (
          <Bubble>Start tuning by playing any string.</Bubble>
        )}
          {/* <Bubble>Start tuning by playing any string.</Bubble> */}
        </TunerContainer>
        <PanelRight>
          <AutoSwitch  auto={auto} setAuto={setAuto} />
          <SelectTuning />
          <DebugButton>Debug</DebugButton>
        </PanelRight>
      
    </AppContainer>


    {visible && (
        <div className="permission-dialog">


          <PermissionDialog message={errorMessage}  />

          {/* <p>{message}</p> */}
        </div>
      )}

    {/* <ErrorDialog/> */}
    {/* <DebugDialog/> */}
  </Root>
  )
}

export default Tuner