import { useEffect } from 'react'

/**
 * Fires a callback each time the screen orientation change.
 * @param callback
 *
 * @example
 * * useScreenOrientation((orientation) => {
 * *   if (orientation.type === "landscape-primary") {
 * *     // do something
 * *   }
 * * })
 */
const useScreenOrientation = (callback: (orientationInfo: ScreenOrientation) => any) => {

  const onOrientationChange = () => {
    callback(window.screen.orientation)
  }

  useEffect(() => {
    window.addEventListener('orientationchange', onOrientationChange)
    return () => {
      window.removeEventListener('orientationchange', onOrientationChange)
    }
  }, [])
}

export default useScreenOrientation
