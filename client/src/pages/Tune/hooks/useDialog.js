// import MicroModal from 'micromodal'

// export function useDialog(id, disableBodyScroll){
//   MicroModal.init()

//   const openDialog = () => {
//     MicroModal.show(id)
//     document.getElementById('modal__close').blur()
//     if (disableBodyScroll) document.body.style.overflow = 'hidden'
//   }
//   const closeDialog = () => {
//     MicroModal.close('id')
//     document.body.style.overflow = 'auto'
//   }

//   return [openDialog, closeDialog]
// }

import MicroModal from 'micromodal';  // es6 module
// var MicroModal = require('micromodal')


export function useDialog(id, disableBodyScroll){
  
  MicroModal.init();
  const openDialog= () => {
    MicroModal.show(id)
    document.getElementById('modal__close').blur()
    if (disableBodyScroll) document.body.style.overflow = 'hidden'
  }

  
  const closeDialog= () => {
    MicroModal.close(id)
    document.body.style.overflow = 'auto'
    
  }

  return [openDialog, closeDialog]
}