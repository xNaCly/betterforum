import { BrowserRouter as Router, Route } from "react-router-dom";

import Landingpage from "./components/Landingpage";
import Footerr from "./components/Footerr";
import ThreadExtended from "./components/ThreadExtended";

// import "./themes/old_school.css";
// import "./themes/terminal.css";
import "./themes/default_dark.css";
// import "./themes/default_light.css";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Landingpage}></Route>
			<Route path="/thread/" component={ThreadExtended}></Route>
			<Footerr />
		</Router>
	);
}

export default App;
