# ezrouter.js

A simple js router library that couldn't be simpler.

- [x] No other library dependencies
- [x] Extremely fast

### how to use

~~~js
ezrouter('/index', () => {
  alert('hello,welcome to index page');
});
// #/index
~~~

~~~js
ezrouter('/index/:id', (params) => {
  alert('you are now at index'+params.id);
})
// #/index/123 or #/index/awa etc.
~~~

You can read `example.html` for more.