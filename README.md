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

## API

``` js
unwrap(fn, def, pred)
unwrap(fn, pred)
unwrap(fn);
```

* `fn`: Function to execute
* `def`: **Optional** Default value to use if no results returned
* `pred`: Predicate function for more advanced decisions than an Array of length `1`

#### Advanced usage

In some scenarios you may want to only unwrap certain Arrays of length one (e.g. listing directories of a length 1). In this case you can pass a `pred` argument to `unwrapper`:

``` js
unwrap(fn, function (result) {
  //
  // Result will always be the first element in the Array
  // - return true to unwrap
  // - return false to NOT unwrap
  //
  return result.expected === 'some-expected-value';
});
```

##### Author: [Jarrett Cruger](https://github.com/jcrugzz)
