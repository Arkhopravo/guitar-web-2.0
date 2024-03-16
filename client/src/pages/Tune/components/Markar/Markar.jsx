import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  font-family: 'aktiv-grotesk', Helvetica, sans-serif;
  position: absolute;
  top: ${({ top = '0' }) => top};
  left: ${({ left = '0' }) => left};
  margin-left: ${({ size = 2.5 }) => -size / 2}em;
  margin-top: ${({ size = 2.5 }) => -size}em;
  width: ${({ size = 2.5 }) => size}em;
  height: ${({ size = 2.5 }) => size}em;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ translate = 0 }) => `translateX(${translate}em)`};
  transition: all 0.11s ease-out;
  will-change: transform;
`

const Pointer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: ${({ background = '#000' }) => background};
  border-radius: 50%;
  box-sizing: border-box;
  border: 0.1875em solid ${({ borderColor = '#FFF' }) => borderColor};

  &:after {
    content: '';
    display: inline-block;
    margin: 0 0.3125em;
    vertical-align: middle;
    border-top: solid 0.625em ${({ borderColor = '#FFF' }) => borderColor};
    border-left: solid 0.3125em transparent;
    border-right: solid 0.3125em transparent;
    bottom: -0.75em;
    position: absolute;
    left: calc(50% - 0.3125em);
    transform: translateX(-50%);
  }
`

const Label = styled.p`
  width: ${({ size = 2.25 }) => size}em;
  height: ${({ size = 2.25 }) => size}em;
  z-index: 1;
  border-radius: 50%;
  font-size: ${({ fontSize = 'auto' }) => fontSize};
  line-height: calc(0.95 * ${({ size = 2.25 }) => size}em);
  text-align: center;
  font-weight: 500;
  color: ${({ color = 'auto' }) => color};
  margin-bottom: 1em;
`




const Markar = ({
  size,
  top,
  left,
  translate,
  borderColor,
  borderWidth,
  background,
  color,
  fontSize,
  children,
}) => {
  return (
    <Root size={size} top={top} left={left} translate={translate}>
    <Pointer background={background} borderColor={borderColor} />
    <Label
      size={size - borderWidth * 2}
      color={color}
      fontSize={fontSize}
      background={background}
    >
      {children}
    </Label>
  </Root>
  )
}

export default Markar