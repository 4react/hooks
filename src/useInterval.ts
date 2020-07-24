import { useState } from 'react'

/**
 * Sets an interval and automatically updates the number of expirations.
 * @param ms Timeout duration in milliseconds.
 * @param [max] Maximum number of expirations.
 *
 * @example
 * * const [counter, clear, reset] = useInterval(3000)
 */
const useInterval = (ms: number, max?: number) => {
  const [counter, setCounter] = useState(0)
  let interval: NodeJS.Timeout

  const clear = () => clearInterval(interval)

  const reset = () => {
    setCounter(0)
    interval = setInterval(() => {
      setCounter(counter + 1)
      if (max && counter === max) {
        clear()
      }
    }, ms)
  }

  reset()

  return [counter, clear, reset]
}

export default useInterval
