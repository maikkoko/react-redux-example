import asyncComponent from '../../containers/AsyncComponent'

const AsyncNotFound = asyncComponent(() =>
  import(/* webpackChunkName: "404" */ './components/NotFound')
)

export default AsyncNotFound
