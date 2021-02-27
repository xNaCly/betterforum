import { useEffect, useState } from "react";

import Top from "./Top";
import Threads from "./ThreadsOverview";

const Landingpage = () => {
	const [threads, setThreads] = useState([]);

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
			<Threads threads={threads} />
		</>
	);
};

export default Landingpage;
