import { useState } from "react";
import Settings from "./Settings";

function TopBar() {
	const [settingsToggledFlag, toggleSettings] = useState(false);
	return (
		<div className="top_bar_div">
			{/* <button className="default_button" onClick={() => toggleSettings(!settingsToggledFlag)}> */}
			{/* Settings */}
			{/* </button> */}
			{/* {settingsToggledFlag && <Settings />} */}
			<Settings></Settings>
		</div>
	);
}

export default TopBar;
