import React from 'react'
import {media} from './constants/breakpoints'
import styled from 'styled-components'


const Toggle = styled.div`
order: 2;
${media.desktop`
order: 1;
`}
user-select: none;
box-sizing: border-box;
padding: 0;
margin: 0;
display: flex;
justify-content: end;
font-weight: 500;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

*::after {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

*,
*::after,
*::before {
  --width: 32px;
  --height: calc(var(--width) / 2);
  --border-radius: calc(var(--width) / 2);
  --switch-box-shadow: 0 0 1rem rgba(0, 0, 0, 0.257);
  --primary-color: #00d296;
}

`


const Input = styled.input`

display: none;
&:checked + label {
  background: var(--primary-color);
  transition: background ease 0.3s;
}
&:checked + label::after {
  transform: translate(-0%, -50%);
  transition: ease 0.3s;
}
`

const Label = styled.label`
font-size: 0.875em;
font-weight: 500;
line-height: 21px;
white-space: nowrap;
color: white;
cursor: pointer;
position: relative;
display: flex;
background: gray;
border-radius: var(--border-radius);
height: calc(var(--height) + 0.5em);
width: calc(var(--width) + 0.5em);
transition: background ease 0.3s;
flex-direction: row-reverse;
padding-right: calc(var(--width) + 0.5em);
align-items: center;

&::before {
  content: '';
  cursor: pointer;
  position: relative;
  display: flex;
  color: transparent;
  border-radius: var(--border-radius);
  height: calc(var(--height) + 0.5em);
  width: calc(var(--width) + 0.5em);
  background: var(--primary-color);
  transition: background ease 0.3s;
  left: 100%;
  margin-left: 1em;
}

&::after {
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);
  background: white;
  height: var(--height);
  width: var(--height);
  border-radius: var(--border-radius);
  transition: ease 0.3s;
  box-shadow: var(--switch-box-shadow);
}
`

const AutoSwitch = ({auto, setAuto}) => {

  const handleChange = () => {
    
  }

  return (
    <Toggle>
    
    <Input
        id='autoSwitch'
        type='checkbox'
        name='check'
        value="isAuto"
        checked={auto}
        onChange={handleChange}

    />
    
    
    <Label htmlFor='autoSwitch' >Auto Switch</Label>
      
      
    </Toggle>
  )
}

export default AutoSwitch