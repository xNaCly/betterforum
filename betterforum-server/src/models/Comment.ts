export interface CommentModel {
	id: string;
	thread_id: string;
	author?: string;
	title: string;
	content: string;
	image?: string; //! url --> image
}
export const CommentSchema = {
	id: String,
	thread_id: String,
	$author: String,
	title: String,
	content: String,
	$image: String, //! url --> image
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
