import { useEffect } from 'react'

let userInteracted = false
export default (callback) => {
  let cleanup
  const handleFirstUserInteraction = () => {
    if (userInteracted) {
      return
    }
    userInteracted = true
    cleanup = callback()
  }

  useEffect(() => {
    document.addEventListener('onmousemove', handleFirstUserInteraction)
    document.addEventListener('onscroll', handleFirstUserInteraction)
    document.addEventListener('ontouchstart', handleFirstUserInteraction)
    document.addEventListener('onkeypress', handleFirstUserInteraction)
    document.addEventListener('onclick', handleFirstUserInteraction)
    return () => {
      if (cleanup) {
        cleanup()
      }
      document.removeEventListener('onmousemove', handleFirstUserInteraction)
      document.removeEventListener('onscroll', handleFirstUserInteraction)
      document.removeEventListener('ontouchstart', handleFirstUserInteraction)
      document.removeEventListener('onkeypress', handleFirstUserInteraction)
      document.removeEventListener('onclick', handleFirstUserInteraction)
    }
  }, [])
}
    