import { useEffect, useState } from "react";
import fetch from "node-fetch";
import ThreadCompact from "./../../ThreadCompact";

const Threads = () => {
	const [threads, updateThreads] = useState([]);

	useEffect(() => {
		const getThreads = async () => {
			let res = await fetch("http://localhost:8080/thread");
			res = await res.json();
			updateThreads(res);
		};
		getThreads();
	}, []);

	return (
		<div>
			{threads.map((thread) => (
				<ThreadCompact {...thread}></ThreadCompact>
			))}
		</div>
	);
};

export default Threads;
