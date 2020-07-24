import { useEffect } from 'react'
import debounce from 'lodash/debounce'

const useWindowScroll = (callback: (scrollX: number, scrollY: number) => any) => {
  const onScroll = () => debounce(() => {
    const { scrollX, scrollY } = window
    callback(scrollX, scrollY)
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })
}

export default useWindowScroll
