import React from 'react'
import styled from 'styled-components'
import Dialog from './dialog'
import CheckIcon from '@mui/icons-material/Check';

const PermissionImage = styled.div`
  position: relative;
  transform: translateX(16%);
  margin-bottom: 1rem;
`


const PermissionDialog = ({onClick}) => {
  return (
    <Dialog
    id="permission-dialog"
    header={{
      showCloseButton: false,
    }}
    actions={{
      primary: {
        label: 'Sounds good',
        onClick,
      },
    }}
    >
      <CheckIcon style={{position:"relative", transform:"translateX(16%)", marginBottom:"1rem"}} />
       <h2>Microphone access</h2>
      <p>
        So we can get started, we’ll need to hear your instrument to give
        guidance while you play.
      </p>
    </Dialog>
  )
}

export default PermissionDialog