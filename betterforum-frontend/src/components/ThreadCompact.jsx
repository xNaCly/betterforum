import { Link } from "react-router-dom";

const Thread = ({ createdAt, title, content, author, id }) => {
	return (
		<div className="thread">
			<Link className="Link " id="thread_href" to={`/thread/${id}`}>{`#${id.slice(0, 6).toUpperCase()}`}</Link>
			<p className="thread_title">{title}</p>
			<hr />
			<p className="thread_content">--&gt; {content.length > 110 ? content.slice(0, 110) + " [...]" : content}</p>
			<div className="author_date_container">
				<p className="thread_date">~{author ?? "Anon"}</p>
				<p className="thread_date">{new Date(createdAt).toString()}</p>
			</div>
		</div>
	);
};

export default Thread;
