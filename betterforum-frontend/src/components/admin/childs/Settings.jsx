import { useState, useEffect } from "react";
import themes from "./../../../themes/themes.json";

function Settings() {
	const [theme, setTheme] = useState();

	const getDefaultTheme = async () => {
		let res = await fetch("http://localhost:8080/theme");
		return await res.json();
	};

	const updateDefaultTheme = async () => {
		await fetch("http://localhost:8080/theme", {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ theme: theme }),
		});
		if (localStorage.getItem("theme-selected") !== theme) return;
		window.location.reload();
	};

	const resetCustomTheme = async () => {
		localStorage.removeItem("theme-selected");
	};

	useEffect(() => {
		const update = async () => {
			const { theme } = await getDefaultTheme();
			setTheme(theme);
		};
		update();
	}, []);

	return (
		<div className="settings">
			<select className="setting_select" value={theme} onChange={(e) => setTheme(e.target.value)}>
				{Object.keys(themes).map((theme) => (
					<option key={theme} value={theme}>
						{theme}
					</option>
				))}
			</select>
			<button className="default_button" onClick={() => updateDefaultTheme()}>
				Submit
			</button>
			<button className="default_button" onClick={() => resetCustomTheme()}>
				Reset Custom Theme
			</button>
		</div>
	);
}

export default Settings;
