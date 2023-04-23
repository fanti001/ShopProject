import '../src/styles/main.scss'
import Layout from "../src/components/Layout/Layout"

import { Provider } from 'react-redux'

function App({
  Component,
  pageProps
}) {
  return <Provider store={store}><Layout > < Component {
    ...pageProps
  }
  /></Layout ></Provider>
}

export default App