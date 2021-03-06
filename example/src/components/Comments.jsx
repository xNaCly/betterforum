import { useEffect, useState } from "react";
import Comment from "./Comment";

function Comments({ id }) {
	const [comments, setComment] = useState([]);

	useEffect(() => {
		// const getComments = async () => {
		// 	const res = await fetch(`http://localhost:8080/thread/${id}/comments`);
		// 	const raw_comments = await res.json();
		// 	setComment(raw_comments.comments.sort((a, b) => b.createdAt - a.createdAt));
		// };
		// getComments();
		setComment([
			{
				title: "Linux Gaming?",
				content: "using windows",
				thread_id: "6mov5k95xuhd2jmag85esf",
				createdAt: 1615050570041,
				comments: [
					{
						title: "Linux Gaming?",
						content: "using windows",
						thread_id: "6mov5k95xuhd2jmag85esf",
						createdAt: 1615050581621,
						author: "Anonymous#uvr1",
						id: "9n1zuw6atsp3lg8xeep18e",
					},
				],
				author: "Anonymous#rl40",
				id: "ph5fntbwwqbc5uh1kd1gsb",
			},
		]);
	}, []);

	if (!comments.length) return <p className="thread_date">No Comments found, create one</p>;
	return (
		<div className="comment" id="threadExtended">
			{comments.map((comment) => (
				<Comment key={comment.id} commentData={comment} threadId={id}></Comment>
			))}
		</div>
	);
}

export default Comments;
