import User from "@customTypes/entities/user";

export type UserResponse = User;

export interface StatisticsResponse {
	taskCount: number;
	commentCount: number;
}
