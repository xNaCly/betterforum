import Comment from "./Comment";

const InlineComment = ({ commentData, threadId, parentId }) => {
	console.log(parentId);
	return <Comment commentData={commentData} threadId={threadId} parentId={parentId} inline={true}></Comment>;
};

export default InlineComment;
