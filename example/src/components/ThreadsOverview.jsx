import { Link } from "react-router-dom";
import Thread from "./ThreadCompact";

function Threads({ threads }) {
	threads = threads.sort((a, b) => b.createdAt - a.createdAt);
	if (!threads.length) return <>no threads yet</>;
	return (
		<div className="thread_div">
			{threads.map((element) => {
				return (
					<Thread
						key={element.id}
						id={element.id}
						title={element.title}
						createdAt={element.createdAt}
						content={element.content}
						author={element.author}
					/>
				);
			})}
		</div>
	);
}

export default Threads;
