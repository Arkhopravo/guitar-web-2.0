export const fixAspectRatios = () => {
   
  
    const isFireFox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
    if (CSS.supports('aspect-ratio', '1 / 1') && !isFireFox) return
  
    let items = document.querySelectorAll('div[data-aspect-ratio]')
    for (let i = 0; items.length > i; i++) {
      const aspectRatio = items[i].getAttribute('data-aspect-ratio')
      items[i].style.width = items[i].offsetHeight * aspectRatio + 'px'
    }
    return
  }
  