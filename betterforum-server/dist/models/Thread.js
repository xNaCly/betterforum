"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateSchema = exports.ThreadCreateSchema = exports.ThreadSchema = void 0;
exports.ThreadSchema = {
    id: String,
    title: String,
    content: String,
    $image: String,
    $author: String,
    comments: Array,
    createdAt: BigInt,
};
exports.ThreadCreateSchema = {
    title: String,
    content: String,
    $image: String,
    $author: String,
};
exports.ThreadUpdateSchema = {
    $title: String,
    $content: String,
    $image: String,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhyZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9UaHJlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBWWEsUUFBQSxZQUFZLEdBQUc7SUFDM0IsRUFBRSxFQUFFLE1BQU07SUFDVixLQUFLLEVBQUUsTUFBTTtJQUNiLE9BQU8sRUFBRSxNQUFNO0lBQ2YsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsTUFBTTtJQUNmLFFBQVEsRUFBRSxLQUFLO0lBQ2YsU0FBUyxFQUFFLE1BQU07Q0FDakIsQ0FBQztBQVNXLFFBQUEsa0JBQWtCLEdBQUc7SUFDakMsS0FBSyxFQUFFLE1BQU07SUFDYixPQUFPLEVBQUUsTUFBTTtJQUNmLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFLE1BQU07Q0FDZixDQUFDO0FBUVcsUUFBQSxrQkFBa0IsR0FBRztJQUNqQyxNQUFNLEVBQUUsTUFBTTtJQUNkLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLE1BQU0sRUFBRSxNQUFNO0NBQ2QsQ0FBQyJ9