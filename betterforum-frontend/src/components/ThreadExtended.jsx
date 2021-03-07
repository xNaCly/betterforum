import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Linkify from "react-linkify";

import Top from "./top/Navbar";
import Comments from "./Comments";
import AddComment from "./AddComment";

function ThreadExtended() {
	const id = window.location.pathname.split("/thread/")[1].replace("/", "");
	const [thread, setThread] = useState();
	const [replyMenuToggled, setFlag] = useState(false);

	useEffect(() => {
		const getThread = async (id) => {
			let res = await fetch(`http://localhost:8080/thread/${id}`);
			res = await res.json();
			setThread(res);
		};
		getThread(id);
	}, []);

	if (!thread || !thread.id) {
		return (
			<>
				<Top text={"404 - Not Found"} />
				<span>
					Can not GET <span className="thread_date">/{id}</span>
				</span>
			</>
		);
	}

	return (
		<>
			<Top text={thread.title} />
			<div className="thread" id="threadExtended">
				<Link className="Link" id="thread_href" to={window.location.href.split("/thread/")[1]}>
					{"#" + thread.id.slice(0, 6)}
				</Link>
				{thread.content.split("\n").map((text) => (
					<p key={text.slice(0, 6)} className="thread_content">
						<Linkify>{text}</Linkify>
					</p>
				))}
				<hr />
				<div className="author_date_container">
					<p className="thread_date">~{thread.author}</p>
					<p className="thread_date">{new Date(thread.createdAt).toString()}</p>
				</div>
				<button className="default_button" onClick={() => setFlag(!replyMenuToggled)}>
					Reply
				</button>
				{/*
				<button
					className="default_button"
					onClick={() => alert("[object Object]\n_.'c²JîÂkTÿÁlSÿÂlTÿÁlSÿÂlTÿÁlSÿÁlSÿÁkSÿÁkSÿÁkSÿ ]O")}>
					Report
					//* fuck reports i aint giving a shit
					</button>
				*/}
			</div>
			<hr id="seperator_thread_comments" />
			{replyMenuToggled && <AddComment threadId={id}></AddComment>}
			<Comments id={thread.id}></Comments>
		</>
	);
}

export default ThreadExtended;
