export interface CommentModel {
    id: string;
    thread_id: string;
    author?: string;
    title: string;
    content: string;
    comments: [];
}
export declare const CommentSchema: {
    id: StringConstructor;
    thread_id: StringConstructor;
    $author: StringConstructor;
    title: StringConstructor;
    comments: ObjectConstructor[];
    content: StringConstructor;
};
export interface CommentCreateModel {
    title: string;
    content: string;
    author?: string;
}
export declare const CommentCreateSchema: {
    title: StringConstructor;
    content: StringConstructor;
    $author: StringConstructor;
};
