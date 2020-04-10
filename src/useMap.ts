import { useState } from 'react'

type MapState = {[key: string]: any}

export class MapForState {
  _state: MapState
  _setState: (newState: MapState) => void

  constructor(state: MapState, setState: (newState: MapState) => void) {
    this._state = state
    this._setState = setState
  }

  get size() {
    return this.keys.length
  }

  get keys() {
    return Object.keys(this._state)
  }

  get values() {
    return Object.values(this._state)
  }

  get(key: string) {
    return this._state[key]
  }

  set(key: string, value: any) {
    const newState = {
      ...this._state,
      [key]: value
    }
    this._setState(newState)
    return newState
  }

  has(key: string) {
    return this._state.hasOwnProperty(key)
  }

  clear() {
    this._setState({})
  }

  delete(key: string) {
    if(this.has(key)) {
      this._setState({
        ...this.keys.filter(k => k !== key).map(k => this._state[k])
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
const useMap = (initialValue: MapState = {}) => {
  const [map, setMap] = useState(initialValue)
  return new MapForState(map, setMap)
}

export default useMap
