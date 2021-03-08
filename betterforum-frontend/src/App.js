import { BrowserRouter as Router, Route } from "react-router-dom";

import Landingpage from "./components/Landingpage";
import Footerr from "./components/Footerr";
import ThreadExtended from "./components/ThreadExtended";
import Setting from "./components/top/Settings";

import themes from "./themes/themes.json";
import "./themes/default.css";
import { useEffect } from "react";

const themePossibilities = Object.keys(themes);

function App() {
	useEffect(() => {
		const themeSelectedRaw = localStorage.getItem("theme-selected");

		const themeSelected = themePossibilities.includes(themeSelectedRaw) ? themeSelectedRaw : "default";

		const themeValues = themes[themeSelected];
		const themeKeys = Object.keys(themeValues);

		themeKeys.forEach((x) => {
			document.documentElement.style.setProperty(x, themeValues[x]);
		});
	}, []);

	return (
		<Router>
			<Route path="/" exact component={Landingpage}></Route>
			<Route path="/settings/" exact component={Setting}></Route>
			<Route path="/thread/" component={ThreadExtended}></Route>
			<Footerr />
		</Router>
	);
}

export default App;
