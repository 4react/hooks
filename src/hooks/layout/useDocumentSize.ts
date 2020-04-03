import { useEffect } from 'react'
import debounce from 'lodash/debounce'

const useDocumentSize = (callback: (width: number, height: number) => any) => {

  const onResize = debounce(() => {
    const { documentElement: { clientWidth: width, clientHeight: height } } = document
    callback(width, height)
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  })
}

export default useDocumentSize
