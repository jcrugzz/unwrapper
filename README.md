# unwrapper

A simple module that unwraps an array when deemed necessary for the result
passed to a given function. The threshold in which it is deemed necessary is
determined by the length of the array returned. A length of 1 is assumed to be
something you want unwrapped.

## install

```sh
npm i unwrapper --save
```

## Example

```js
var unwrap = require('unwrapper');
var api = require('./api');

//
// Pretend this API returns an [] even when you expect it to be a single entity
//
api.get('/books-by', 'barney rubble', unwrap(function (err, result) {
  // expect `result` to be a single object.
}));


```
