import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Router from './router'
import store from './store'

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} >
        <Router />
      </Provider>
    </AppContainer>,
    document.getElementById('root') as HTMLElement
  )
}

renderApp()

const mModule = module as any

if (mModule.hot) {
  mModule.hot.accept('./src/App', () => {
    renderApp()
  })
}
