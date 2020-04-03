import { useState } from 'react'

/**
 * Use a list state.
 * @param {any[]} [initialValue] Initial value of the state.
 * @returns {object} UseArrayReturn
 * * @prop {any[]} values Elements of the array.
 * * @prop {Function} setValues Set the entire array.
 * * @prop {Function} clear Empty the array.
 * * @prop {Function} push Adds new elements to the end of an array, and returns the new length.
 * * @prop {Function} pop Removes the last element of an array, and returns that element.
 * * @prop {Function} shift Removes the first element of an array, and returns that element.
 * * @prop {Function} unshift Adds new elements to the beginning of an array, and returns the new length.
 */
const useArray = (initialValue: any[] = []) => {
  const [values, set] = useState(initialValue)

  const clear = () => {
    set([])
  }

  const push = (...elements: any[]) => {
    const newArray = [...values, ...elements]
    set(newArray)
    return newArray.length
  }

  const pop = () => {
    const lastElement = values.slice(-1)
    const otherElements = values.slice(0, -1)
    set(otherElements)
    return lastElement
  }

  const shift = () => {
    const firstElement = values.slice(0, 1)
    const otherElements = values.slice(1)
    set(otherElements)
    return firstElement
  }

  const unshift = (...elements: any[]) => {
    const newArray = [...elements, ...values]
    set(newArray)
    return newArray.length
  }

  return { values, set, clear, push, pop, shift, unshift }
}

export default useArray
