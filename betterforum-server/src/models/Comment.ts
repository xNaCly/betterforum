export interface CommentModel {
	id: string;
	thread_id: string;
	author?: string;
	title: string;
	content: string;
	comments: [];
}
export const CommentSchema = {
	id: String,
	thread_id: String,
	$author: String,
	title: String,
	comments: [Object],
	content: String,
};
export interface CommentCreateModel {
	title: string;
	content: string;
	author?: string;
}
export const CommentCreateSchema = {
	title: String,
	content: String,
	$author: String,
};
