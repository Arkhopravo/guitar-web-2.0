import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.span`
font-family: 'YousicianIcons' !important;
speak: none;
font-style: normal;
font-weight: normal;
font-variant: normal;
text-transform: none;
line-height: 1;
letter-spacing: 0;
-webkit-font-feature-settings: 'liga';
-moz-font-feature-settings: 'liga=1';
-moz-font-feature-settings: 'liga';
-ms-font-feature-settings: 'liga' 1;
font-feature-settings: 'liga';
-webkit-font-variant-ligatures: discretionary-ligatures;
font-variant-ligatures: discretionary-ligatures;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

${({ size }) =>
  size
    ? `
        font-size: ${size}px;
    `
    : ''}
${({ color }) =>
  color
    ? `
          color: ${color};
      `
    : ''};
`

const Icon = ({name, ...props}) => {
  return (
    <StyledIcon {...props}>{name}</StyledIcon>
  )
}

export default Icon