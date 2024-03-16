import useFirstUserInteractionEffect from './useFirstUserInteractionEffect'
import NoSleep from 'nosleep.js';

let noSleep

function useNoSleep() {
  useFirstUserInteractionEffect(() => {
    noSleep = new NoSleep()
    return () => {
      noSleep.disable()
      noSleep = null
    }
  })
  return noSleep
}

export default useNoSleep;
