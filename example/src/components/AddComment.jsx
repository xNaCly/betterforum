import { useState } from "react";

function AddComment({ threadId, inline = false, parentId = null }) {
	const [username, setUsername] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	if (inline) {
		async function createComment() {
			"";
		}

		return (
			<>
				<input
					className={inline ? "input__" : "input_"}
					placeholder="username"
					onChange={(E) => setUsername(E.target.value)}></input>
				<input
					className={inline ? "input__" : "input_"}
					placeholder="*title"
					onChange={(E) => setTitle(E.target.value)}></input>
				<textarea
					className={inline ? "input__" : "input_"}
					placeholder="*content"
					onChange={(E) => setContent(E.target.value)}></textarea>
				<button className="default_button" onClick={createComment}>
					Submit
				</button>
			</>
		);
	}

	async function createComment() {
		"";
		// if (!content || !title) return alert("content or title missing");
		// const comment = { title: title, content: content };
		// if (username) comment.author = username;

		// await fetch(`http://localhost:8080/thread/${threadId}/comments`, {
		// 	method: "POST",
		// 	body: JSON.stringify(comment),
		// 	headers: { "content-type": "application/json" },
		// });
		// window.location.reload();
	}

	return (
		<>
			<input className="input_" placeholder="username" onChange={(E) => setUsername(E.target.value)}></input>
			<input className="input_" placeholder="*title" onChange={(E) => setTitle(E.target.value)}></input>
			<textarea className="input_" placeholder="*content" onChange={(E) => setContent(E.target.value)}></textarea>
			<button className="default_button" onClick={createComment}>
				Submit
			</button>
		</>
	);
}

export default AddComment;
