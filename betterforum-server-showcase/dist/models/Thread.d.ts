export interface ThreadModel {
    id: string;
    title: string;
    content: string;
    author?: string;
    comments: [];
    createdAt: bigint;
}
export declare const ThreadSchema: {
    id: StringConstructor;
    title: StringConstructor;
    content: StringConstructor;
    $author: StringConstructor;
    comments: ArrayConstructor;
    createdAt: BigIntConstructor;
};
export interface ThreadCreateModel {
    title: string;
    content: string;
    author?: string;
}
export declare const ThreadCreateSchema: {
    title: StringConstructor;
    content: StringConstructor;
    $author: StringConstructor;
};
export interface ThreadUpdateModel {
    title?: string;
    content?: string;
}
export declare const ThreadUpdateSchema: {
    $title: StringConstructor;
    $content: StringConstructor;
};
