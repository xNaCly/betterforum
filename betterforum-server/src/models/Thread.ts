import { CommentModel, CommentSchema } from "./Comment";

//* General Thread
export interface ThreadModel {
	id: string;
	title: string;
	content: string;
	image?: string;
	author?: string;
	comments: [];
	createdAt: bigint;
}
export const ThreadSchema = {
	id: String,
	title: String,
	content: String,
	$image: String,
	$author: String,
	comments: Array,
	createdAt: BigInt,
};

//* Creation
export interface ThreadCreateModel {
	title: string;
	content: string;
	image?: string;
	author?: string;
}
export const ThreadCreateSchema = {
	title: String,
	content: String,
	$image: String,
	$author: String,
};

//* Thread Update
export interface ThreadUpdateModel {
	title?: string;
	content?: string;
	image?: string;
}
export const ThreadUpdateSchema = {
	$title: String,
	$content: String,
	$image: String,
};
