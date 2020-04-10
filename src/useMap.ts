import { Dispatch, SetStateAction, useState } from 'react'

type MapState<T> = {[key: string]: T}

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

  set(key: string, value: any): MapState<T> {
    const newState = {
      ...this._state,
      [key]: value
    }
    this._setState(newState)
    return newState
  }

  has(key: string): boolean {
    return this._state.hasOwnProperty(key)
  }

  clear(): void {
    this._setState({})
  }

  delete(key: string): boolean {
    if(this.has(key)) {
      const otherKeys = this.keys.filter(k => k !== key)
      const newState = otherKeys.reduce<MapState<T>>(
        (newState: MapState<T>, currentKey: string) => {
          newState[key] = this.get(currentKey)
          return newState
        }, {}
      )

      this._setState(newState)
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
  const [map, setMap] = useState<MapState<T>>(initialValue)
  return new MapForState<T>(map, setMap)
}

export default useMap
