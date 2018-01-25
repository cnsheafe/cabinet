import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HelloWorld from './pages/hello-world'

export default () => (
  <Router>
    <>
      <Route exact={true} path="/" component={HelloWorld} />
    </>
  </Router>
)