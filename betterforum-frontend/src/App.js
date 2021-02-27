import { BrowserRouter as Router, Route } from "react-router-dom";

import Landingpage from "./components/Landingpage";
import Footerr from "./components/Footerr";
import ThreadExtended from "./components/ThreadExtended";
import CreateThread from "./components/CreateThread";

import "./App.css";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Landingpage}></Route>
			<Route path="/thread/" component={ThreadExtended}></Route>
			<Route path="/createThread" component={CreateThread}></Route>
			<Footerr />
		</Router>
	);
}

export default App;
