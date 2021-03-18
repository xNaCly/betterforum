import { useState } from "react";
import TopBar from "../top/TopBar";

import Settings from "./childs/Settings";
import Bans from "./childs/Bans";
import Threads from "./childs/Threads.jsx";

function Admin() {
	const [settings, updateSettingsUsageFlag] = useState(false);
	const [bans, updateBanUsageFlag] = useState(false);
	const [mngThreads, updateMngThreadsFlag] = useState(false);
	return (
		<div className="admin_pannel">
			<TopBar hideAdmin={true}></TopBar>
			<div className="admin_container">
				<div className="side_pannel">
					<button className="default_button" to="/" onClick={() => updateSettingsUsageFlag(!settings)}>
						Settings
					</button>
					<button className="default_button" to="/" onClick={() => updateBanUsageFlag(!bans)}>
						Bans
					</button>
					<button className="default_button" to="/" onClick={() => updateMngThreadsFlag(!mngThreads)}>
						Manage Threads
					</button>
				</div>
				<div className="right_pannel">
					{settings && <Settings />}
					{bans && <Bans />}
					{mngThreads && <Threads />}
				</div>
			</div>
		</div>
	);
}

export default Admin;
