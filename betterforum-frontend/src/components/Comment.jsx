import { Link } from "react-router-dom";
import Linkify from "react-linkify";

const Comment = ({ commentData, threadId }) => {
	const { id, author, createdAt, content, title } = commentData;
	return (
		<div className="thread_comment" key={id}>
			<Link className="Link" id="comment_href" to={`/thread/${threadId}/comment/${id}`}>{`#${id
				.slice(0, 6)
				.toUpperCase()}`}</Link>
			<p className="thread_title">{title}</p>
			<hr />
			{content
				.replace(/\\n/g, "\n")
				.split("\n")
				.map((text) => (
					<p className="thread_content">
						<Linkify>{text}</Linkify>
					</p>
				))}
			<div className="author_date_container">
				<p className="thread_date">~{author}</p>
				<p className="thread_date">{new Date(createdAt).toString()}</p>
			</div>
		</div>
	);
};

export default Comment;
