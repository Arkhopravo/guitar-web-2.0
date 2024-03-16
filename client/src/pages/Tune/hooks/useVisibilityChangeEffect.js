
import { useEffect } from 'react';

export default (callback, dependencies = []) => {
  let hidden, visibilityChange;
  if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }

  const handleVisibilityChange = () => {
    callback(!document[hidden]);
  };

  useEffect(() => {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
    return () => {
      document.removeEventListener(
        visibilityChange,
        handleVisibilityChange,
        false
      );
    };
  }, dependencies);
};
