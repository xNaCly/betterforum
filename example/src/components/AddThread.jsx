import { useState } from "react";

const AddThread = () => {
	const [username, setUsername] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	async function addThread() {
		return;
		// if (!content || !title) return alert("content or title missing");
		// const comment = { title: title, content: content };
		// if (username) comment.author = username;
		// await fetch(`http://localhost:8080/thread/`, {
		// 	method: "POST",
		// 	body: JSON.stringify(comment),
		// 	headers: { "content-type": "application/json" },
		// });
		// window.location.reload();
	}

	return (
		<div className="createThread_container">
			<input className="input__" placeholder="username" onChange={(E) => setUsername(E.target.value)}></input>
			<input className="input__" placeholder="*title" onChange={(E) => setTitle(E.target.value)}></input>
			<textarea
				className="input__"
				placeholder="*content"
				onChange={(E) => setContent(E.target.value)}></textarea>
			<button className="default_button" onClick={() => ""}>
				Submit
			</button>
		</div>
	);
};

export default AddThread;
