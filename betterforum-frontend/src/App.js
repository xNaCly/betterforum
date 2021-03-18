import { BrowserRouter as Router, Route } from "react-router-dom";

import Landingpage from "./components/Landingpage";
import Footerr from "./components/Footerr";
import ThreadExtended from "./components/ThreadExtended";

import Setting from "./components/top/Settings";

import Admin from "./components/admin/Admin";

import themes from "./themes/themes.json";
import "./themes/default.css";
import { useEffect } from "react";

const themePossibilities = Object.keys(themes);

function App() {
	const getTheme = async () => {
		let res = await fetch("http://localhost:8080/theme");
		res = await res.json();
		return res.theme;
	};

	useEffect(() => {
		const loadTheme = async () => {
			const themeSelectedRaw = localStorage.getItem("theme-selected") || (await getTheme());

			const themeSelected = themePossibilities.includes(themeSelectedRaw) ? themeSelectedRaw : "default";

			const themeValues = themes[themeSelected];
			const themeKeys = Object.keys(themeValues);

			themeKeys.forEach((x) => {
				document.documentElement.style.setProperty(x, themeValues[x]);
			});
		};
		loadTheme();
	}, []);

	return (
		<Router>
			<Route path="/" exact component={Landingpage}></Route>
			<Route path="/settings/" exact component={Setting}></Route>
			<Route path="/admin/" exact component={Admin}></Route>
			<Route path="/thread/" component={ThreadExtended}></Route>
			<Footerr />
		</Router>
	);
}

export default App;
