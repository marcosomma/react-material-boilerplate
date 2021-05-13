import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalState } from './context/GlobalState'
import Landing from './containers/Landing'
import NotFound from './containers/404'
import customeTheme from './theme'
import { Container } from '@material-ui/core'

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <GlobalState>
        <Container classname={'app'} maxWidth={'sm'}>
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Container>
      </GlobalState>
    </ThemeProvider>
  )
}

export default App
