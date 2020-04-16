import { useEffect, useState } from 'react'

const useStateWithEffect = <T>(
  initialState: T,
  effect: (newState: T) => any
): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(initialState)

  useEffect(() => effect(state), [state, effect])

  return [state, setState]
}

export default useStateWithEffect
