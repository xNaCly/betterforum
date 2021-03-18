"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateSchema = exports.CommentSchema = void 0;
exports.CommentSchema = {
    id: String,
    thread_id: String,
    $author: String,
    title: String,
    comments: [Object],
    content: String,
};
exports.CommentCreateSchema = {
    title: String,
    content: String,
    $author: String,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvQ29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRYSxRQUFBLGFBQWEsR0FBRztJQUM1QixFQUFFLEVBQUUsTUFBTTtJQUNWLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsS0FBSyxFQUFFLE1BQU07SUFDYixRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsT0FBTyxFQUFFLE1BQU07Q0FDZixDQUFDO0FBTVcsUUFBQSxtQkFBbUIsR0FBRztJQUNsQyxLQUFLLEVBQUUsTUFBTTtJQUNiLE9BQU8sRUFBRSxNQUFNO0lBQ2YsT0FBTyxFQUFFLE1BQU07Q0FDZixDQUFDIn0=