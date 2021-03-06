import { useEffect, useState } from "react";

import Top from "./Top";
import AddThread from "./AddThread";
import Threads from "./ThreadsOverview";

const Landingpage = () => {
	const [threads, setThreads] = useState([]);
	const [threadCreationState, threadCreationUsageState] = useState(false);

	useEffect(() => {
		setThreads([
			{
				title: "Linux Gaming?",
				author: "$2b$10$VomPDJ9NlRAR9CCBo99XqutF9A7X6gQhtMOCpNYWS7PYvQVeOr8oi",
				content:
					"Will there ever be a final solution to the linux gaymer issue? Lets discuss strategies, solutions, or just workarounds for linux fags who like playing video games but dont like booting into windows (at least full time).\n Right now I currently dual boot windows for my games, but its annoying because I obviously lose access to my linux distro. Ive experimented with VFIO but its still in meme stages and even though Im aware of the likes of Lutris and Proton (and Wine) but I like to mod my games and often emulate consoles.\n\nWhat do you vidya gaymen /g/entlemen do?",
				comments: [],
				createdAt: 1615050455481,
				id: "6mov5k95xuhd2jmag85esf",
			},
		]);
		// const getThreads = async () => {
		// 	let res = await fetch("http://localhost:8080/thread");
		// 	res = await res.json();
		// 	setThreads(res);
		// };
		// getThreads();
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
