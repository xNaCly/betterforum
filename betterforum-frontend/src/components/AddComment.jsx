import { useState } from "react";

function AddComment({ threadId }) {
	const [username, setUsername] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	async function createComment() {
		if (!content || !title) return alert("content or title missing");
		const comment = { title: title, content: content };
		if (username) comment.author = username;

		await fetch(`http://localhost:8080/thread/${threadId}/comments`, {
			method: "POST",
			body: JSON.stringify(comment),
			headers: { "content-type": "application/json" },
		});
		window.location.reload();
	}

	return (
		<>
			<input className="input_" placeholder="username" onChange={(E) => setUsername(E.target.value)}></input>
			<input className="input_" placeholder="*title" onChange={(E) => setTitle(E.target.value)}></input>
			<input className="input_" placeholder="*content" onChange={(E) => setContent(E.target.value)}></input>
			<button className="default_button" onClick={createComment}>
				Submit
			</button>
		</>
	);
}

export default AddComment;
