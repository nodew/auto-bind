export default (self, ...props) => {
  const ownProps = Object.getOwnPropertyNames(self.constructor.prototype)
  const toBind = props.length > 0 ? props : ownProps
  toBind.forEach(key => {
    const val = self[key]
    if (val && key !== 'constructor' && typeof val === 'function') {
      self[key] = val.bind(self)
    }
  })
}
