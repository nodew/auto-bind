# AutoBind

this package is used to make ES6 classes's method auto binding to it's instance

## usage:

```JavaScript
import { AutoBind, rcAutoBind } from 'autoBind'
// AutoBind is used for normal ES6 class
// rcAutoBind is specific for react component using ES6 class

class SomeClass {
  constructor() {
    AutoBind(this)
    // or bind specific methods 
    AutoBind(this, 'method1', 'method2')
    // or rcAutoBind(this)
    rcAutoBind(this, ...)
  }

  method1() {}
  method2() {}
  ...
}