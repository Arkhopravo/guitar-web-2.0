import E2SoundMp3 from '../../../assets/music/E.mp3'
import A2SoundMp3 from '../../../assets/music/A.mp3'
import D3SoundMp3 from '../../../assets/music/D.mp3'
import G3SoundMp3 from '../../../assets/music/G.mp3'
import B3SoundMp3 from '../../../assets/music/B.mp3'
import E4SoundMp3 from '../../../assets/music/E4.mp3'

export default [
  {
    note: 'D',
    octave: 3,
    number: 2,
    audio: D3SoundMp3,
    style: {
      row: 1,
      column: 1,
    },
  },
  {
    note: 'A',
    octave: 2,
    number: 1,
    audio: A2SoundMp3,
    style: {
      row: 2,
      column: 1,
    },
  },
  {
    note: 'E',
    octave: 2,
    number: 0,
    audio: E2SoundMp3,
    style: {
      row: 3,
      column: 1,
    },
  },
  {
    note: 'G',
    octave: 3,
    number: 3,
    audio: G3SoundMp3,
    style: {
      row: 1,
      column: 3,
    },
  },
  {
    note: 'B',
    octave: 3,
    number: 4,
    audio: B3SoundMp3,
    style: {
      row: 2,
      column: 3,
    },
  },
  {
    note: 'E',
    octave: 4,
    number: 5,
    audio: E4SoundMp3,
    style: {
      row: 3,
      column: 3,
    },
  },
]
