import "../src/styles/main.scss";
import Layout from "../src/components/Layout/Layout";

import { Provider } from "react-redux";
import store from "../store/store";
function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<div className='app'>
				<Layout>
					{" "}
					<Component {...pageProps} />
				</Layout>
			</div>
		</Provider>
	);
}

export default App;
