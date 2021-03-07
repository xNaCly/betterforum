import { useState } from "react";

function Settings() {
	const [themeSelected, setTheme] = useState("default");

	async function changeTheme(theme) {
		localStorage.setItem("theme-selected", theme);
		setTheme(theme);
		window.location.reload();
	}

	return (
		<div className="settings">
			<select
				className="setting_select"
				value={localStorage.getItem("theme-selected")}
				onChange={(e) => changeTheme(e.target.value)}>
				<option value="default">light</option>
				<option value="dark">dark</option>
				<option value="terminal">terminal</option>
				<option value="old_school">old-school</option>
			</select>
		</div>
	);
}

export default Settings;
