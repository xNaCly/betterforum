"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateSchema = exports.CommentSchema = void 0;
exports.CommentSchema = {
    id: String,
    thread_id: String,
    $author: String,
    title: String,
    content: String,
    $image: String,
};
exports.CommentCreateSchema = {
    title: String,
    content: String,
    $author: String,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvQ29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRYSxRQUFBLGFBQWEsR0FBRztJQUM1QixFQUFFLEVBQUUsTUFBTTtJQUNWLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsS0FBSyxFQUFFLE1BQU07SUFDYixPQUFPLEVBQUUsTUFBTTtJQUNmLE1BQU0sRUFBRSxNQUFNO0NBQ2QsQ0FBQztBQU1XLFFBQUEsbUJBQW1CLEdBQUc7SUFDbEMsS0FBSyxFQUFFLE1BQU07SUFDYixPQUFPLEVBQUUsTUFBTTtJQUNmLE9BQU8sRUFBRSxNQUFNO0NBQ2YsQ0FBQyJ9