import asyncComponent from '../../containers/AsyncComponent'

const AsyncHome = asyncComponent(() =>
  import(/* webpackChunkName: "home" */ './components/Home')
)

export default AsyncHome
