# is

  Simple type checking.

## Installation

    $ npm install @weo-edu/is

## Example

```js
var is = require('is');

is.arguments(arguments);            // true
is.array([]);                       // true
is.boolean(true);                   // true
is.date(new Date);                  // true
is.function(function(){});          // true
is.null(null);                      // true
is.number(42);                      // true
is.object({});                      // true
is.regexp(/[A-Za-z0-9]+/);          // true
is.string('A');                     // true
is.undefined(undefined);            // true
is.nan(NaN);                        // true
is.empty([]);                       // true
is.promise(new Promise());          // true
is.generator((function*(){})())     // true
is.generatorFunction(function*(){}) // true
```

## License

  MIT
