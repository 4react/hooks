import { SetState, UseState } from './_types'

export class AsArray<T> {
  state: T[]
  setState: SetState<T[]>

  constructor(source: UseState<T[]>) {
    const [state, setState] = source
    this.state = state
    this.setState = setState
  }

  get length(): number {
    return this.state.length
  }

  get(index: number): T {
    return this.state[index]
  }

  get first(): T {
    return this.get(0)
  }

  get last(): T {
    return this.get(this.length - 1)
  }

  push(...elements: T[]): void {
    this.setState(prev => [...prev, ...elements])
  }

  pop(): void {
    if (this.length) {
      this.setState(prev => prev.slice(0, -1))
    }
  }

  shift(): void {
    this.setState(prev => prev.slice(1))
  }

  unshift(...elements: T[]): void {
    this.setState(prev => [...elements, ...prev])
  }
}

/**
 * Adapts a state of type array.
 * @param state The result of an useState call.
 *
 * @example
 * * const array = asArray(useState([]))
 * * array.push(item)
 * * const item = array.last
 * * array.pop()
 */
const asArray = <T>(state: UseState<T[]>): AsArray<T> => (
  new AsArray<T>(state)
)

export default asArray
