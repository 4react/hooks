import { Dispatch, SetStateAction, useMemo, useState } from 'react'

type MapState<T> = { [key: string]: T }

export class MapForState<T> {
  _state: MapState<T>
  _setState: Dispatch<SetStateAction<MapState<T>>>

  constructor(state: MapState<T>, setState: Dispatch<SetStateAction<MapState<T>>>) {
    this._state = state
    this._setState = setState
  }

  get size(): number {
    return this.keys.length
  }

  get keys(): string[] {
    return Object.keys(this._state)
  }

  get values(): T[] {
    return Object.values(this._state)
  }

  get(key: string): T {
    return this._state[key]
  }

  set(key: string, value: T): void {
    this._setState(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  has(key: string): boolean {
    return this._state.hasOwnProperty(key)
  }

  clear(): void {
    this._setState({})
  }

  delete(key: string): boolean {
    if (this.has(key)) {
      this._setState(prevState => {
        const otherKeys = Object.keys(prevState).filter(k => k !== key)
        return otherKeys.reduce<MapState<T>>(
          (newState: MapState<T>, currentKey: string) => {
            newState[key] = prevState[currentKey]
            return newState
          }, {}
        )
      })
      return true
    }
    return false
  }

  entries() {
    const iteratorGenerator = () => {
      let index = 0
      return {
        next: () => {
          const key = this.keys[index++]
          const value = this._state[key]
          return [key, value]
        }
      }
    }
    return iteratorGenerator()
  }
}

/**
 * Use a map state.
 * @param {MapState} [initialValue] Initial value of the state.
 * @returns {MapForState} An object with the same methods of JavaScript standard Map.
 */
const useMap = <T>(initialValue: MapState<T> = {}) => {
  const [map, setValues] = useState<MapState<T>>(initialValue)

  const keys: string[] = useMemo(() => Object.keys(map), [map])

  const values: T[] = useMemo(() => Object.values(map), [map])

  const size: number = useMemo(() => keys.length, [map])

  const get = (key: string): T => {
    return map[key]
  }

  const set = (key: string, value: T): void => {
    setValues(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const has = (key: string): boolean => {
    return keys.includes(key)
  }

  const remove = (key: string): void => {
    if (has(key)) {
      setValues(prevState => {
        const otherKeys = Object.keys(prevState).filter(k => k !== key)
        return otherKeys.reduce<MapState<T>>(
          (newState: MapState<T>, currentKey: string) => {
            newState[key] = prevState[currentKey]
            return newState
          }, {}
        )
      })
    }
  }

  return { keys, values, size, get, setValues, set, has, remove }
}

export default useMap
