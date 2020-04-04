import { createRef, useEffect, RefObject, useState } from 'react'
import debounce from 'lodash/debounce'

const useElementSize = <T extends HTMLElement>() => {
  const ref: RefObject<T> = createRef<T>()
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const onResize = debounce(() => {
    if (!ref.current) return
    const { clientWidth, clientHeight } = ref.current
    setWidth(clientWidth)
    setHeight(clientHeight)
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return [ref, width, height]
}

export default useElementSize
