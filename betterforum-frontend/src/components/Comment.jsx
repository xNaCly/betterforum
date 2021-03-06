import { Link } from "react-router-dom";
import { useState } from "react";
import Linkify from "react-linkify";
import InlineComment from "./InlineComment";
import AddComment from "./AddComment";

const Comment = ({ commentData, threadId, inline = false, parentId = null }) => {
	const [replyMenuToggled, setFlag] = useState(false);

	const { author, createdAt, content, title } = commentData;
	const comments = commentData.comments;
	const id = commentData.id;

	return (
		<div className="thread_comment" key={id}>
			<Link
				className="Link"
				id="comment_href"
				to={
					parentId
						? `/thread/${threadId}/comments/${parentId}/comments/${id}`
						: `/thread/${threadId}/comments/${id}`
				}>{`#${id.slice(0, 6).toUpperCase()}`}</Link>
			<p className="thread_title">{title}</p>
			<hr />
			{content
				.replace(/\\n/g, "\n")
				.split("\n")
				.map((text) => (
					<p key={text.slice(0, 6)} className="thread_content">
						<Linkify>{text}</Linkify>
					</p>
				))}
			<div className="author_date_container">
				<p className="thread_date">~{author}</p>
				<p className="thread_date">{new Date(createdAt).toString()}</p>
			</div>
			{!inline && (
				<>
					<button className="default_button" onClick={() => setFlag(!replyMenuToggled)}>
						Reply
					</button>
					{replyMenuToggled && (
						<div className="reply_comment_container">
							<AddComment threadId={threadId} inline={true} parentId={id} />
						</div>
					)}
				</>
			)}
			{comments && (
				<div className="inline_comment">
					<hr id="hr" />
					{comments.map((c) => (
						<InlineComment key={c.id} commentData={c} threadId={threadId} parentId={id}></InlineComment>
					))}
				</div>
			)}
		</div>
	);
};

export default Comment;
