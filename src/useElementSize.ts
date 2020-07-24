import debounce from 'lodash/debounce'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

/**
 * Gets dimensions of the specified element and automatically updates them.
 *
 * @example
 * * const [ref, width, height] = useElementSize()
 * * return <Foo ref={ref} />
 */
const useElementSize = <T extends HTMLElement>() => {
  const ref: MutableRefObject<T | undefined> = useRef<T>()
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const onResize = debounce(() => {
    if (!ref.current) return
    const { clientWidth, clientHeight } = ref.current
    setWidth(clientWidth)
    setHeight(clientHeight)
  }, 50)

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
