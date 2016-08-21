import test from 'ava'
import { autoBind, rcAutoBind } from '../src'

test('auto bind all', t => {
  class TestCase {
    constructor(name) {
      this.name = name
      autoBind(this)
    }
    sayHello() {
      return `hello, ${this.name}!`
    }
    getName() {
      return this.name
    }
  }

  const testCase = new TestCase('world')
  const sayHello = testCase.sayHello
  const getName = testCase.getName

  t.is(sayHello(), 'hello, world!')
  t.is(getName(), 'world')
})

test('auto bind specific props', t => {
  class TestCase {
    constructor(name) {
      this.name = name
      autoBind(this, 'sayHello')
    }
    sayHello() {
      return `hello, ${this.name}!`
    }
    getName() {
      return this.name
    }
  }

  const testCase = new TestCase('world')
  const sayHello = testCase.sayHello
  const getName = testCase.getName

  t.is(sayHello(), 'hello, world!')
  try {
    getName()
    t.fail()
  } catch (err) {
    t.pass()
  }
})

test('react auto bind', t => {
  class TestCase {
    constructor(name) {
      this.name = name
      rcAutoBind(this)
    }
    componentDidMount() {
      return this.name
    }
    sayHello() {
      return `hello, ${this.name}!`
    }
    getName() {
      return this.name
    }
    render() {
      return this.name
    }
  }

  const testCase = new TestCase('world')
  const sayHello = testCase.sayHello
  const getName = testCase.getName
  const componentDidMount = testCase.componentDidMount
  const render = testCase.render

  t.is(sayHello(), 'hello, world!')
  t.is(getName(), 'world')
  try {
    componentDidMount()
    t.fail()
  } catch (err) {
    t.pass()
  }
  try {
    render()
    t.fail()
  } catch (err) {
    t.pass()
  }
})
