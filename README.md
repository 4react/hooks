# @4react / hooks

Common utility hooks for React Applications

## Usage

Import package.
```
npm i @4react/hooks
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

| Return (object) | Type | Description |
| --- | --- | --- |
| values | any[] | The elements in the array. |
| setValues | Function | Take a new array of element to replace the stored one. |
| clear | Function | Empty the array. |
| push | Function | Adds new elements to the end of an array, and returns the new length. |
| pop | Function | Removes the last element of an array, and returns that element. |
| shift | Function | Removes the first element of an array, and returns that element. |
| unshift | Function | Adds new elements to the beginning of an array, and returns the new length. |

### useDocumentSize
```jsx
useDocumentSize((width, height) => {
  // do something
})
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | Function | - | A function called each time the document is resized. It receives new values of **width** and **height**. |

### useElementSize
```jsx
const myElementRef = useElementSize((width, height) => {
  // do something
})

...

<MyElement ref={myElementRef} />
```

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | Function | - | A function called each time the element is resized. It receives new values of **width** and **height**. |

| Return | Type | Description |
| --- | --- | --- |
| ref | React.RefObject | The reference object to pass to the element for which we want to listen for resize. |

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
