import { useEffect, useState } from 'react'

/**
 * Combines useState and useEffect into a single hook.
 * @param initialValue Initial value for the state.
 * @param effect Callback function the effect.
 */
const useStateWithEffect = <T>(
  initialValue: T,
  effect: (newState: T) => any
): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(initialValue)

  useEffect(() => effect(state), [state, effect])

  return [state, setState]
}

export default useStateWithEffect
