import React from 'react'
import Dialog from './Dialog'

const DebugDialog = ({debug}) => {

  return (
        <Dialog 
        id="debug-dialog"
        header={{
          title: 'Debug',
        }}
        >
          <div>
            {Object.entries(debug).map(([key, value]) => (
              <span key={key}>
                {key}: {value}
              </span>
            ))}
          </div>
       </Dialog>
  )
}

export default DebugDialog