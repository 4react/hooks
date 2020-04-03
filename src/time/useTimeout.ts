import { useState } from 'react'

/**
 * Use a timeout.
 * @param {number} ms Timeout duration (milliseconds).
 * @returns {[boolean, Function, Function]}
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
