import { useState } from 'react'

/**
 * Use an interval.
 * @param {number} ms Timeout duration (milliseconds).
 * @param {number} [max] Maximum number of iterations.
 * @returns {[boolean, Function, Function]}
 */
const useInterval = (ms: number, max: number) => {
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
