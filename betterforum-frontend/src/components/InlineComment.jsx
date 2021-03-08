import Comment from "./Comment";

const InlineComment = ({ commentData, threadId, parentId }) => {
	return <Comment commentData={commentData} threadId={threadId} parentId={parentId} inline={true}></Comment>;
};

export default InlineComment;
