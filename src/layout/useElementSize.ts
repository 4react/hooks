import { createRef, useEffect, RefObject } from 'react'
import debounce from 'lodash/debounce'

const useElementSize = <T extends HTMLElement>(callback: Function) => {
  const ref: RefObject<T> = createRef<T>()

  const onResize = debounce(() => {
    if (!ref.current) return
    const { clientWidth: width, clientHeight: height } = ref.current
    callback(width, height)
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  })

  return ref
}

export default useElementSize
