import { useEffect, useState } from 'react'

const useStateWithEffect = <T>(
  initialValue: T,
  effect: (newState: T) => any
): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(initialValue)

  useEffect(() => effect(state), [state, effect])

  return [state, setState]
}

export default useStateWithEffect
