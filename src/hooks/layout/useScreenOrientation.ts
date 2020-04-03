import { useEffect } from 'react'

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
