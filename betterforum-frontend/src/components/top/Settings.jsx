import { useState } from "react";
import TopBar from "./TopBar";

import themes from "./../../themes/themes.json";

function Settings() {
	const getTheme = async () => {
		let res = await fetch("http://localhost:8080/theme");
		res = await res.json();
		localStorage.setItem("theme-selected", res.theme);
		window.location.reload();
		console.log(res);
		return res.theme;
	};

	const theme_selected = localStorage.getItem("theme-selected") || getTheme();
	const theme_values = themes[theme_selected];
	const themeKeys = Object.keys(theme_values);

	const [themeSelected, setTheme] = useState("default");

	async function changeTheme(theme) {
		localStorage.setItem("theme-selected", theme);
		setTheme(theme);
		window.location.reload();
	}

	return (
		<div className="hundred_percent">
			<TopBar />
			<div className="settings">
				<div className="settings_theme_select">
					<span>theme: </span>
					<select
						className="setting_select"
						value={localStorage.getItem("theme-selected")}
						onChange={(e) => changeTheme(e.target.value)}>
						{Object.keys(themes).map((theme) => (
							<option key={theme} value={theme}>
								{theme}
							</option>
						))}
					</select>
				</div>
				<div className="settings_theme_display_values">
					{themeKeys.map((x) => {
						return (
							<p key={x}>
								{x}:{" "}
								<span
									style={{
										color: theme_values[x],
										background:
											(x === "--background" || x === "--background2") && theme_values["--accent"],
									}}>
									{theme_values[x]}
								</span>
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Settings;
