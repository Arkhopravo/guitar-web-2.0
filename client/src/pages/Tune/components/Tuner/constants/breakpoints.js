import { css } from 'styled-components'

const screens = {
  mobileVert: '375px',
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  desktopWide: '1200px',
  siteMaxWidth: '1440px',
  gtMaxWidth: '1600px',
  tunerCutoff: '550px',
}

export const media = Object.keys(screens).reduce((accumulator, label) => {
  const size = screens[label]

  accumulator[label] = (...args) => css`
    @media (${label.indexOf('Only') >= 0 ? 'max' : 'min'}-width: ${size}) {
      ${css(...args)};
    }
  `

  return accumulator
}, {})
