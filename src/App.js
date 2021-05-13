import './App.css'

import CounterClass from "./components/counterClass/CounterClass";
import CounterFunction from "./components/counterFunction/CounterFunction";
import CounterRedux from "./components/counterRedux/CounterRedux";
import CounterReduxHooks from "./components/counterReduxHooks/CounterReduxHooks";

//1. import provider and wrap app
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
	return (
	<div className="app">
		<Provider store={store}>
			<CounterClass />
			<CounterFunction />
			<CounterRedux />
			<CounterReduxHooks />
		</Provider>
	</div>
	)
}

export default App;
