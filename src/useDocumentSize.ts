import { useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

const useDocumentSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const onResize = debounce(() => {
    const { documentElement: { clientWidth, clientHeight } } = document
    setWidth(clientWidth)
    setHeight(clientHeight)
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  })

  return [width, height]
}

export default useDocumentSize
