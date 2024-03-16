import midiutils from 'midiutils'

// Standard tunings
const guitarStandardMidi = [40, 45, 50, 55, 59, 64] // default 6-string guitar tuning ("EADGBE")
const ukuleleStandardMidi = [67, 60, 64, 69] // default ukulele tuning
const cavaquinhoStandardMidi = [62, 67, 71, 74] // default cavaquinho tuning
const bass4StandardMidi = [28, 33, 38, 43] // default 4-string bass tuning
const bass5StandardMidi = [23, 28, 33, 38, 43] // default 5-string bass tuning
const violinStandardMidi = [55, 62, 69, 76] // default violin tuning
const violaStandardMidi = [48, 55, 62, 69] // default viola tuning
const celloStandardMidi = [36, 43, 50, 57] // default cello tuning
const fiddleStandardMidi = [55, 62, 69, 76] // default fiddle tuning
const guitar7StandardMidi = [35, 40, 45, 50, 55, 59, 64] // default guitar 7-string guitar tuning
const guitar12StandardMidi = [52, 40, 57, 45, 62, 50, 67, 55, 59, 59, 64, 64] // default 12-string guitar tuning
const mandolinStandardMidi = [55, 55, 62, 62, 69, 69, 76, 76] // default mandolin tuning
const balalaikaStandardMidi = [64, 64, 69] // default balalaika tuning
const banjo4StandardMidi = [48, 55, 62, 69] // default 4-string banjo tuning
const banjo5StandardMidi = [67, 50, 55, 59, 62] // default 5-string banjo tuning

const tuningOptions = [
  {
    instrument: 'Guitar',
    icon: 'instrumnent_guitar_dark',
    options: [
      {
        label: 'Guitar 6-string: Standard',
        notes: guitarStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
      },
      {
        label: 'Guitar 7-string: Standard',
        notes: guitar7StandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Guitar 12-string: Standard',
        notes: guitar12StandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Guitar 6-string: Power',
        premium: true,
      },
      {
        label: 'Guitar 6-string: Open',
        premium: true,
      },
      {
        label: 'Guitar 6-string: Extras',
        premium: true,
      },
    ],
  },
  {
    instrument: 'Ukulele & Cavaquinho',
    icon: 'instrumnent_ukulele',
    options: [
      {
        label: 'Ukulele: Standard',
        notes: ukuleleStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Cavaquinho: Standard',
        notes: cavaquinhoStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
    ],
  },
  {
    instrument: 'Bass 4 & 5-string',
    icon: 'instrumnent_bass',
    options: [
      {
        label: 'Bass 4-string: Standard',
        notes: bass4StandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Bass 5-string: Standard',
        notes: bass5StandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
    ],
  },
  {
    instrument: 'Guitar 7 & 12-string',
    icon: 'instrumnent_guitar_dark',
    options: [
      {
        label: 'Guitar 7-string: Standard',
        notes: guitar7StandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Guitar 12-string: Standard',
        notes: guitar12StandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
    ],
  },
  {
    instrument: 'Violin Family',
    icon: 'instrumnent_bass',
    options: [
      {
        label: 'Violin: Standard',
        notes: violinStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Viola: Standard',
        notes: violaStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Cello: Standard',
        notes: celloStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Fiddle: Standard',
        notes: fiddleStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
    ],
  },
  {
    instrument: 'Folk instruments',
    icon: 'instrumnent_mandolin',
    options: [
      {
        label: 'Mandolin: Standard',
        notes: mandolinStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Balalaika: Standard',
        notes: balalaikaStandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Banjo 4-string: Standard',
        notes: banjo4StandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
      {
        label: 'Banjo 5-string: Standard',
        notes: banjo5StandardMidi.map((number) => {
          const [note, octave] = midiutils.noteNumberToName(number).split('-')
          return { note, octave }
        }),
        premium: true,
      },
    ],
  },
]

export default tuningOptions
