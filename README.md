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
| [useArray](#usearray) | Manages an array state and provides helpful methods to updates it |
| [useMap](#usemap) | Manages a map state and provides helpful methods to updates it |

#### Time

| Name | Description |
| --- | --- |
| [useInterval](#useinterval) | Increment a counter every ***ms*** milliseconds. |
| [useTimeout](#usetimeout) | Turns a flag from false to true after ***ms*** milliseconds. |

## APIs

### useArray
```jsx
const { values, push, pop } = useArray()

...

<button onClick={() => push(newElement)}>PUSH</button>
<button onClick={() => pop()}>POP</button>
{values.map(el => <li>{el}</li>)}
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| initialValue | any[] | [] | Initial values for the array. |

Returned object has the same methods and signatures of the standard [JavaScript Array](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array) class.

### useDocumentSize
```jsx
useDocumentSize((width, height) => {
  // do something
})
```

| Return (array) | Type | Description |
| --- | --- | --- |
| width | number | The actual width of the document. |
| height | number | The actual height of the document. |

### useElementSize
```jsx
const myElementRef = useElementSize((width, height) => {
  // do something
})

...

<MyElement ref={myElementRef} />
```

| Return (array) | Type | Description |
| --- | --- | --- |
| ref | React.RefObject | The reference object to pass to the element for which we want to listen for resize. |
| width | number | The actual width of the element. |
| height | number | The actual height of the element. |

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

| Return | Type | Description |
| --- | --- | --- |
| counter | number | The number of interval passed since the last reset. |
| clear | Function | Clear the interval. |
| reset | Function | Restart the interval and reset the counter. |

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

Returned object has the same methods and signatures of the standard [JavaScript Map](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Map) class.

### useScreenOrientation
```jsx
useScreenOrientation((orientation) => {
  // do something
})
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

| Return | Type | Description |
| --- | --- | --- |
| elapsed | boolean | *True* if timeout is elapsed. |
| clear | Function | Cancel the timeout. |
| reset | Function | Start a new timeout. |

### useWindowScroll
```jsx
useWindowScroll((scrollX, scrollY) => {
  // do something
})
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | Function | - | A function called after every scroll action of the window. It receives new values of **scrollX** and **scrollY**. |
