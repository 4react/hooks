import { useState } from 'react'

/**
 * Sets a timeout and automatically change the state when elapsed.
 * @param ms Timeout duration in milliseconds.
 *
 * @example
 * * const [elapsed, clear, reset] = useTimeout(3000)
 */
const useTimeout = (ms: number) => {
  const [elapsed, setElapsed] = useState(false)
  let timeout: NodeJS.Timeout

  const clear = () => {
    clearTimeout(timeout)
  }

  const reset = () => {
    setElapsed(false)
    timeout = setTimeout(() => {
      setElapsed(true)
    }, ms)
  }

  reset()

  return [elapsed, clear, reset]
}

export default useTimeout
