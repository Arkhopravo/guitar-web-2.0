import React from 'react'
import styled from 'styled-components'
import Dialog from './Dialog'

import ErrorIcon from '@mui/icons-material/Error';


const ErrorDialog = ({ title = 'Oops!', message, close }) => {
  return (
    <Dialog
    id="error-dialog"
      header={{}}
      actions={{
        primary: {
          label: 'Dismiss',
          onClick: () => close(),
        },
      }}
    >
      <ErrorIcon style={{marginBottom:"1rem"}}/>
       <h2>{title}</h2>
      <p>{message}</p>
    </Dialog>
  )
}

export default ErrorDialog