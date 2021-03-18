"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateSchema = exports.ThreadCreateSchema = exports.ThreadSchema = void 0;
exports.ThreadSchema = {
    id: String,
    title: String,
    content: String,
    $author: String,
    comments: Array,
    createdAt: BigInt,
};
exports.ThreadCreateSchema = {
    title: String,
    content: String,
    $author: String,
};
exports.ThreadUpdateSchema = {
    $title: String,
    $content: String,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhyZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9UaHJlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBV2EsUUFBQSxZQUFZLEdBQUc7SUFDM0IsRUFBRSxFQUFFLE1BQU07SUFDVixLQUFLLEVBQUUsTUFBTTtJQUNiLE9BQU8sRUFBRSxNQUFNO0lBQ2YsT0FBTyxFQUFFLE1BQU07SUFDZixRQUFRLEVBQUUsS0FBSztJQUNmLFNBQVMsRUFBRSxNQUFNO0NBQ2pCLENBQUM7QUFRVyxRQUFBLGtCQUFrQixHQUFHO0lBQ2pDLEtBQUssRUFBRSxNQUFNO0lBQ2IsT0FBTyxFQUFFLE1BQU07SUFDZixPQUFPLEVBQUUsTUFBTTtDQUNmLENBQUM7QUFPVyxRQUFBLGtCQUFrQixHQUFHO0lBQ2pDLE1BQU0sRUFBRSxNQUFNO0lBQ2QsUUFBUSxFQUFFLE1BQU07Q0FDaEIsQ0FBQyJ9