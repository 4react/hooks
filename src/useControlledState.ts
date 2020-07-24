import { useState } from 'react'

/**
 * Creates a locale state that can also be controlled via external props.
 * @param defaultValue Default "uncontrolled" value.
 * @param controlledValue External "controlled" value.
 * @param callback Function triggered each time the state change.
 *
 * @example
 * * const TextInput = ({ defaultValue, value, onChange }) => {
 * *   const [state, setState] = useControlledState(defaultValue, value, onChange)
 * *   return <input value={state} onChange={setState} />
 * * }
 */
const useControlledState = <T>(
  defaultValue: T,
  controlledValue?: T,
  callback?: (updatedValue: T) => any
) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<T>(defaultValue)

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

  const setValue = (newValue: T) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue)
    }
    if (callback) {
      callback(newValue)
    }
  }

  return [value, setValue]
}

export default useControlledState
