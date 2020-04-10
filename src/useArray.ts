import { useState } from 'react'

export class ArrayForState<T> {
  _state: T[]
  _setState: (newState: T[]) => void

  constructor(state: T[], setState: (newState: T[]) => void) {
    this._state = state
    this._setState = setState
  }

  get length(): number {
    return this._state.length
  }

  copyWithin(target: number, start: number, end?: number): this {
    const oldState = [...this._state]
    const newState = oldState.copyWithin(target, start, end)
    this._setState(newState)
    return this
  }

  fill(value: T, start?: number, end?: number): this {
    const oldState = [...this._state]
    const newState = oldState.fill(value, start, end)
    this._setState(newState)
    return this
  }

  pop(): T {
    const lastElement = this._state[this.length - 1]
    const oldState = this._state.slice(0, -1)
    this._setState(oldState)
    return lastElement
  }

  push(...elements: T[]): number {
    const newState = [...this._state, ...elements]
    this._setState(newState)
    return newState.length
  }

  reverse(): this {
    const oldState = [...this._state]
    const newState = oldState.reverse()
    this._setState(newState)
    return this
  }

  shift(): T {
    const firstElement = this._state[0]
    const oldState = this._state.slice(1)
    this._setState(oldState)
    return firstElement
  }

  sort(compareFn?: (a: T, b: T) => number): this {
    const oldState = [...this._state]
    const newState = oldState.sort(compareFn)
    this._setState(newState)
    return this
  }

  splice(start: number, deleteCount: number, ...items: T[]): this {
    const oldState = [...this._state]
    const newState = oldState.splice(start, deleteCount, ...items)
    this._setState(newState)
    return this
  }

  unshift(...elements: T[]): number {
    const newState = [...elements, ...this._state]
    this._setState(newState)
    return newState.length
  }

  concat(...items: ConcatArray<T>[]): T[] {
    return this._state.concat(...items)
  }

  includes(searchElement: T, fromIndex?: number): boolean {
    return this._state.includes(searchElement, fromIndex)
  }

  indexOf(searchElement: T, fromIndex?: number): number {
    return this._state.indexOf(searchElement, fromIndex)
  }

  join(separator?: string): string {
    return this._state.join(separator)
  }

  lastIndexOf(searchElement: T, fromIndex?: number): number {
    return this._state.lastIndexOf(searchElement, fromIndex)
  }

  slice(start?: number, end?: number): T[] {
    return this._state.slice(start, end)
  }

  toString(): string {
    return this._state.toString()
  }

  toLocaleString(): string {
    return this._state.toLocaleString()
  }

  entries(): IterableIterator<[number, T]> {
    return this._state.entries()
  }

  every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any) {
    return this._state.every(callbackfn)
  }

  filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[] {
    return this._state.filter(callbackfn, thisArg)
  }

  find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined {
    return this._state.find(predicate, thisArg)
  }

  findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number {
    return this._state.findIndex(predicate, thisArg)
  }

  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
    return this._state.forEach(callbackfn, thisArg)
  }

  keys(): IterableIterator<number> {
    return this._state.keys()
  }

  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
    return this._state.map(callbackfn, thisArg)
  }

  reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
    return this._state.reduce(callbackfn, initialValue)
  }

  reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
    return this._state.reduceRight(callbackfn, initialValue)
  }

  some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    return this._state.some(callbackfn, thisArg)
  }

  values(): IterableIterator<T> {
    return this._state.values()
  }

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        const value = this._state[index++]
        const done = index === this.length
        return { value, done }
      }
    }
  }
}

/**
 * Use an array state.
 * @param {any[]} [initialValue] Initial value of the state.
 * @returns {ArrayForState} An object with the same methods of JavaScript standard Array.
 */
const useArray = <T>(initialValue: T[] = []) => {
  const [array, setArray] = useState(initialValue)
  return new ArrayForState(array, setArray)
}

export default useArray
