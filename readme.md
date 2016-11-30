# React Native Navigator simplest example

This repo shows a super simple usage of the React Native Navigator.

The application has just two possible routes/scenes

```javascript
// index.ios.js

...
const routes = [
  { title: 'First Scene', index: 0, component: FirstScene },
  { title: 'Second Scene', index: 1, component: SecondScene }
]
...
```

The initial scene displayed by the Navigator is handled by the FirstScene component.

A touch on the first scene causes the displaying of the second scene handled by the SecondScene component.

```javascript
// FirstScene.js

...
<TouchableHighlight onPress={() => {
  const navigator = this.props.navigator
  const routes = this.props.routes
  navigator.push(routes[1])
}}>
...
```

A touch on the second scene causes the displaying of the first scene.

```javascript
// SecondScene.js

...
<TouchableHighlight onPress={() => {
  const navigator = this.props.navigator
  const routes = this.props.routes
  navigator.pop()
}}>
...
```
