# @4react / hooks

Common utility hooks for React Applications

## Usage

Add dependency.
```
npm i @4react/hooks
```

Import the strictly necessary
```js
import useTimeout from '@4react/useTimeout'
```

## List of hooks

#### Layout

| Name  | Description |
| --- | --- |
| [useDocumentSize](#usedocumentsize) | Triggers a callback after every resize of the document. |
| [useElementSize](#useelementsize) | Generic version of the ***useDocumentSize***. Triggers the callback after every resize of an element. |
| [useScreenOrientation](#usescreenorientation) | Triggers the callback after every change of the screen orientation. |
| [useWindowScroll](#usewindowscroll) | Triggers the callback after every scroll action of the window. |

#### State

| Name | Description |
| --- | --- |
| [useList](#uselist) | Manages an array state and provides helpful methods to updates it |
| [useMap](#usemap) | Manages a map state and provides helpful methods to updates it |
| [useToggle](#usetoggle) | Manages a boolean state and provides a method to negate its value |
| [useStateWithEffect](#usestatewitheffect) | Manages a state and declares an effect on its value change |

#### Time

| Name | Description |
| --- | --- |
| [useInterval](#useinterval) | Increment a counter every ***ms*** milliseconds. |
| [useTimeout](#usetimeout) | Turns a flag from false to true after ***ms*** milliseconds. |

## APIs

### useDocumentSize
```jsx
const [width, height] = useDocumentSize()

useEffect(() => {
  // do something
},[width, height])
```

| Return (array) | Type | Description |
| --- | --- | --- |
| 1 | number | The actual width of the document. |
| 2 | number | The actual height of the document. |

### useElementSize
```jsx
const [elRef, elWidth, elHeight] = useElementSize()

useEffect(() => {
  // do something
}, [elWidth, elHeight])

...

<MyElement ref={elRef} />
```

| Return (array) | Type | Description |
| --- | --- | --- |
| 1 | React.RefObject | The reference object to pass to the element for which we want to listen for resize. |
| 2 | number | The actual width of the element. |
| 3 | number | The actual height of the element. |

### useInterval
```jsx
const [counter] = useInterval(3000)

useEffect(() => {
    // do something
}, [counter])
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ms | number | - | Milliseconds of the interval duration. |
| max | number | - | Maximum number of increment before the interval is cleared automatically. |

| Return (array) | Type | Description |
| --- | --- | --- |
| 1 | number | The number of interval passed since the last reset. |
| 2 | Function | Method to clear the interval. |
| 3 | Function | Method to restart the interval and reset the counter. |

### useList
```jsx
const books = useList()
// ...
const removeLast = () => {
  alert(`You removed ${books.last}`)
  books.pop()
}
// ...
<li>
  {books.values.map(book => (
    <li>{book}</li>
  ))}
</li>
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| initialValue | any[] | [] | Initial values for the list. |

| Return (object) | Type | Description |
| --- | --- | --- |
| values | any[] | Array of all stored items |
| length | number | Number of stored items |
| first | any | First stored element |
| last | any | Last stored element |
| set | Function | Sets the entire state |
| get | Function | Gets the items at the required position |
| push | Function | Adds items at the end of the list |
| pop | Function | Removes last item from the list |
| shift | Function | Adds items at the beginning of the list |
| unshift | Function | Removes first item from the list |

### useMap
```jsx
const map = useMap()

...

<button onClick={() => map.set(key, value)}>ADD</button>
<button onClick={() => map.delete(key)}>DELETE</button>
{map.values(val => <li>{val}</li>)}
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| initialValue | object<string,any> | {} | Initial values for the map. |

| Return (object) | Type | Description |
| --- | --- | --- |
| keys | string[] | Array of all keys of the store |
| values | any[] | Array of all values of the store |
| size | number | Number of stored values |
| get | Function | Gets the value associated to the required key |
| set | Function | Sets a value for the specified key |
| setValues | Function | Sets the entire state |
| has | Function | Returns true if the state contains the specified key |
| remove | Function | Removes the specified key |

### useScreenOrientation
```jsx
useScreenOrientation((orientation) => {
  // do something
})
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | Function | - | A function called each time the screen orientation change. It receives new **orientation**. |

### useStateWithEffect
```jsx
const [value, setValue] = useStateWithEffect(
  'initialValue',
  (newState) => {
    // do something
  }
)
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | Function | - | A function called each time the screen orientation change. It receives new **orientation**. |

### useTimeout
```jsx
const [elapsed] = useTimeout(3000)

useEffect(() => {
    // do something
}, [elapsed])
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ms | number | - | Milliseconds of the timout duration. |

| Return (array) | Type | Description |
| --- | --- | --- |
| 1 | boolean | *True* if timeout is elapsed. |
| 2 | Function | Method to cancel the timeout. |
| 3 | Function | Method to reset the timeout. |

### useToggle
```jsx
const [enabled, toggleEnabled] = useToggle()

return (
  <Switch
    enabled={enabled}
    onClick={toggleEnabled}
  />
)
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| initialValue | boolean | false | Initial value of the state. |

| Return (array)  | Type| Description |
| --- | --- | --- |
| 1 | boolean | The value of the state. |
| 2 | Function | The toggle method. |

### useWindowScroll
```jsx
useWindowScroll((scrollX, scrollY) => {
  // do something
})
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | Function | - | A function called after every scroll action of the window. It receives new values of **scrollX** and **scrollY**. |
