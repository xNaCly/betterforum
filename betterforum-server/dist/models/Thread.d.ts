export interface ThreadModel {
    id: string;
    title: string;
    content: string;
    image?: string;
    author?: string;
    comments: [];
    createdAt: bigint;
}
export declare const ThreadSchema: {
    id: StringConstructor;
    title: StringConstructor;
    content: StringConstructor;
    $image: StringConstructor;
    $author: StringConstructor;
    comments: ArrayConstructor;
    createdAt: BigIntConstructor;
};
export interface ThreadCreateModel {
    title: string;
    content: string;
    image?: string;
    author?: string;
}
export declare const ThreadCreateSchema: {
    title: StringConstructor;
    content: StringConstructor;
    $image: StringConstructor;
    $author: StringConstructor;
};
export interface ThreadUpdateModel {
    title?: string;
    content?: string;
    image?: string;
}
export declare const ThreadUpdateSchema: {
    $title: StringConstructor;
    $content: StringConstructor;
    $image: StringConstructor;
};
