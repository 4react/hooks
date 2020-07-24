import { SetState, UseState } from './_types'

export interface Obj<T> {
  [key: string]: T
}

export class AsObject<T> {
  state: Obj<T>
  setState: SetState<Obj<T>>

  constructor(source: UseState<Obj<T>>) {
    const [state, setState] = source
    this.state = state
    this.setState = setState
  }

  get(key: string): T {
    return this.state[key]
  }

  set(key: string, value: T): void {
    this.setState(prev => ({
      ...prev,
      [key]: value
    }))
  }

  get keys(): string[] {
    return Object.keys(this.state)
  }

  get values(): T[] {
    return this.keys.map(key => this.get(key))
  }

  get size(): number {
    return this.keys.length
  }

  has(key: string): boolean {
    return this.state[key] !== undefined
  }

  clear(): void {
    this.setState({})
  }

  delete(key: string): boolean {
    if (this.has(key)) {
      this.setState(prev => {
        const otherKeys = Object.keys(prev).filter(k => k !== key)
        return otherKeys.reduce<Obj<T>>(
          (newState: Obj<T>, currentKey: string) => {
            // eslint-disable-next-line no-param-reassign
            newState[key] = prev[currentKey]
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
          const value = this.state[key]
          return [key, value]
        }
      }
    }
    return iteratorGenerator()
  }
}

/**
 * Adapts a state of type object.
 * @param state The result of an useState call.
 *
 * @example
 * * const obj = asObject(useState({}))
 * * obj.set(key, value)
 * * const value = obj.get(key)
 * * obj.delete(key)
 */
const asObject = <T>(state: UseState<Obj<T>>): AsObject<T> => (
  new AsObject<T>(state)
)

export default asObject
