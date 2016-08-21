import autoBind from './autoBind'

const ignoreProps = [
  'constructor',
  'render',
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'shouldComponentUpdate',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount',
]

export default (self, ...props) => {
  const ownProps = Object.getOwnPropertyNames(self.constructor.prototype)
  const toBind = props.length > 0 ? props : ownProps
  const filteredProps = toBind.filter(item => ignoreProps.indexOf(item) < 0)
  autoBind(self, ...filteredProps)
}
