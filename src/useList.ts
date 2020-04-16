import { useState } from 'react'

/**
 * Use an array state.
 * @param {any[]} [initialValue] Initial value of the state.
 */
const useList = <T>(initialValue: T[] = []) => {
  const [values, set] = useState(initialValue)

  const length: number = values.length

  const first: T = values[0]

  const last: T = values[values.length - 1]

  const get = (index: number): T => values[index]

  const push = (...elements: T[]): void => {
    set(prevState => [...prevState, ...elements])
  }

  const pop = (): void => {
    if (length) {
      set(prevState => prevState.slice(0, -1))
    }
  }

  const shift = (): void => {
    set(prevState => prevState.slice(1))
  }

  const unshift = (...elements: T[]): void => {
    set(prevState => [...elements, ...prevState])
  }

  return { values, set, length, first, last, get, push, pop, shift, unshift }
}

export default useList
