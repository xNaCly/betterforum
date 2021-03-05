import { useEffect, useState } from "react";

import Top from "./Top";
import AddThread from "./AddThread";
import Threads from "./ThreadsOverview";

const Landingpage = () => {
	const [threads, setThreads] = useState([]);
	const [threadCreationState, threadCreationUsageState] = useState(false);

	useEffect(() => {
		const getThreads = async () => {
			let res = await fetch("http://localhost:8080/thread");
			res = await res.json();
			setThreads(res);
		};
		getThreads();
	}, []);

	return (
		<>
			<Top text="Landingpage"></Top>
			<div className="createThread_container">
				<hr id="hr" />
				<button
					className="default_button new_thread_button"
					onClick={() => threadCreationUsageState(!threadCreationState)}>
					new Thread
				</button>
				{threadCreationState && <AddThread />}
			</div>
			<Threads threads={threads} />
		</>
	);
};

export default Landingpage;
