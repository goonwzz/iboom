import React from 'react'
import {BackTop} from 'antd'
import {Router} from 'react-router'

class AppContainer extends React.Component {
  render() {
    const {store, history, routes} = this.props
    return (
      <div style={{minHeight: '100%', height: '100%'}}>
        <Router history={history} routes={routes}/>
        <BackTop visibilityHeight={400} />
      </div>
    )
  }
}

export default AppContainer
