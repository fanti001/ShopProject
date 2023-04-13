import '../src/styles/main.scss'
import Layout from "../src/components/Layout/Layout"

function App({
  Component,
  pageProps
}) {
  return <Layout > < Component {
    ...pageProps
  }
  /></Layout >
}

export default App