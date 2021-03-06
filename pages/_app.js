import * as React from 'react'
import NextApp from 'next/app'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

import Root from '../src/redux/Root'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Root>
        <ThemeProvider theme={theme}>
          <ColorSwitcher />
          <Component {...pageProps} />
        </ThemeProvider>
      </Root>
    )
  }
}
