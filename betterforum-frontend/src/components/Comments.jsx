import { useEffect, useState } from "react";
import Comment from "./Comment";

function Comments({ id }) {
	const [comments, setComment] = useState([]);

	useEffect(() => {
		const getComments = async () => {
			const res = await fetch(`http://localhost:8080/thread/${id}/comments`);
			const raw_comments = await res.json();
			setComment(raw_comments.comments.sort((a, b) => b.createdAt - a.createdAt));
		};
		getComments();
	}, []);

	if (!comments.length) return <p className="thread_date">No Comments found, create one</p>;
	return (
		<div className="comment" id="threadExtended">
			{comments.map((comment) => (
				<Comment commentData={comment} threadId={id}></Comment>
			))}
		</div>
	);
}

export default Comments;
