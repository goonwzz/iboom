
import React from 'react'
import ReactDOM from 'react-dom'
import useBasename from 'history/lib/useBasename'
import {useRouterHistory, browserHistory, hashHistory} from 'react-router'
import AppContainer from 'Containers/AppContainer'
import routes from 'Routes/index.js'

const userHistory = useBasename(() => browserHistory)({basename: `/`})

ReactDOM.render(
  <AppContainer history={userHistory} routes={routes}/>,
  document.getElementById('app')
)
