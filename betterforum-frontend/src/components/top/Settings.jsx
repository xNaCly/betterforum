import { useState } from "react";
import TopBar from "./TopBar";

import themes from "./../../themes/themes.json";

function Settings() {
	const theme_selected = localStorage.getItem("theme-selected");
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
								{x}: {theme_values[x]}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Settings;
